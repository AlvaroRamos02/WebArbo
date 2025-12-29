import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting simple en memoria (en producción usar Redis o similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 3; // Máximo 3 envíos por minuto

// Función para sanitizar strings
function sanitizeString(input: string, maxLength: number): string {
    return input
        .trim()
        .slice(0, maxLength)
        .replace(/[<>]/g, "") // Remover tags HTML básicos
        .replace(/\n{3,}/g, "\n\n"); // Limitar saltos de línea múltiples
}

// Función para escapar HTML y prevenir XSS
function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Función para validar y sanitizar email
function validateEmail(email: string): string | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sanitized = email.trim().toLowerCase();

    if (!emailRegex.test(sanitized)) {
        return null;
    }

    // Prevenir emails demasiado largos
    if (sanitized.length > 254) {
        return null;
    }

    return sanitized;
}

// Función para verificar rate limiting
function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }

    record.count++;
    return true;
}

// Limpiar entradas antiguas del rate limit map cada 5 minutos
setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now > record.resetTime) {
            rateLimitMap.delete(ip);
        }
    }
}, 5 * 60 * 1000);

export async function POST(request: NextRequest) {
    try {
        // Obtener IP del cliente para rate limiting
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ||
            request.headers.get("x-real-ip") ||
            "unknown";

        // Verificar rate limiting
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "Demasiadas solicitudes. Por favor, espera un momento antes de intentar de nuevo." },
                { status: 429 }
            );
        }

        // Verificar que el Content-Type sea JSON
        const contentType = request.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
            return NextResponse.json(
                { error: "Content-Type debe ser application/json" },
                { status: 400 }
            );
        }

        const body = await request.json();
        let { name, email, type, message } = body;

        // Validación de campos requeridos
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Faltan campos requeridos" },
                { status: 400 }
            );
        }

        // Validar y sanitizar email
        const validatedEmail = validateEmail(email);
        if (!validatedEmail) {
            return NextResponse.json(
                { error: "Email inválido" },
                { status: 400 }
            );
        }
        email = validatedEmail;

        // Sanitizar y validar nombre (máximo 100 caracteres)
        name = sanitizeString(name, 100);
        if (name.length < 2) {
            return NextResponse.json(
                { error: "El nombre debe tener al menos 2 caracteres" },
                { status: 400 }
            );
        }

        // Sanitizar y validar mensaje (máximo 2000 caracteres)
        message = sanitizeString(message, 2000);
        if (message.length < 10) {
            return NextResponse.json(
                { error: "El mensaje debe tener al menos 10 caracteres" },
                { status: 400 }
            );
        }

        // Validar tipo de proyecto
        const validTypes = ["procesos", "automatizacion", "web-corporativa", "landing", "otro"];
        if (type && !validTypes.includes(type)) {
            type = "otro";
        }

        // Verificar que Resend esté configurado
        if (!process.env.RESEND_API_KEY) {
            console.error("❌ RESEND_API_KEY no está configurada");
            return NextResponse.json(
                { error: "Error de configuración del servidor. Por favor, contacta al administrador." },
                { status: 500 }
            );
        }

        // Verificar email de destino
        const recipientEmail = process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL;
        if (!recipientEmail) {
            console.error("❌ CONTACT_EMAIL o RESEND_FROM_EMAIL no está configurado");
            return NextResponse.json(
                { error: "Error de configuración del servidor. Por favor, contacta al administrador." },
                { status: 500 }
            );
        }

        // Mapear valores legibles
        const typeLabels: Record<string, string> = {
            "procesos": "Optimización de procesos",
            "automatizacion": "Automatización",
            "landing": "Landing Page",
            "web-corporativa": "Web Corporativa",
            "otro": "Otro"
        };

        // Escapar todos los valores para prevenir XSS
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
        const safeType = escapeHtml(typeLabels[type] || type);

        // Enviar email con Resend
        const emailResult = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || `onboarding@resend.dev`,
            to: recipientEmail,
            replyTo: email,
            subject: `🌳 Nuevo contacto de ${safeName} - ${safeType}`,
            html: `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6; line-height: 1.6;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f1ec;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1F4D3A 0%, #D8A866 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                                🌳 Nuevo Contacto desde Arbor Group
                            </h1>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px; background-color: #faf8f5;">
                            <!-- Nombre -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #1F4D3A; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Nombre
                                        </p>
                                        <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border-left: 4px solid #1F4D3A; margin-top: 8px;">
                                            <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 500;">
                                                ${safeName}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Email -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #1F4D3A; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Email
                                        </p>
                                        <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border-left: 4px solid #1F4D3A; margin-top: 8px;">
                                            <a href="mailto:${safeEmail}" style="color: #1F4D3A; text-decoration: none; font-size: 16px; font-weight: 500;">
                                                ${safeEmail}
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Tipo de Proyecto -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #1F4D3A; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Tipo de Proyecto
                                        </p>
                                        <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border-left: 4px solid #1F4D3A; margin-top: 8px;">
                                            <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 500;">
                                                ${safeType}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Mensaje -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #D8A866; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Mensaje
                                        </p>
                                        <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border-left: 4px solid #D8A866; margin-top: 8px;">
                                            <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.7; white-space: pre-wrap;">
                                                ${safeMessage}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Footer -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding-top: 30px; border-top: 2px solid #e5e7eb;">
                                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #6b7280; text-align: center; line-height: 1.6;">
                                            Este email fue enviado desde el formulario de contacto de <strong style="color: #1F4D3A;">Arbor Group</strong>.
                                        </p>
                                        <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center; line-height: 1.6;">
                                            Puedes responder directamente a este email para contactar con <strong>${safeName}</strong>.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `.trim(),
            text: `
Nuevo Contacto desde Arbor Grup

Nombre: ${name}
Email: ${email}
Tipo de Proyecto: ${typeLabels[type] || type}

Mensaje:
${message}

---
Este email fue enviado desde el formulario de contacto de Arbor Group.
Puedes responder directamente a este email para contactar con ${name}.
            `.trim(),
        });

        if (emailResult.error) {
            console.error("❌ Error al enviar email con Resend:", emailResult.error);
            return NextResponse.json(
                { error: "Error al enviar el mensaje. Por favor, intenta de nuevo más tarde." },
                { status: 500 }
            );
        }

        console.log("✅ Email enviado correctamente:", emailResult.data?.id);

        return NextResponse.json(
            { message: "Mensaje enviado correctamente" },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Error al procesar el mensaje:", error);

        // No exponer detalles del error al cliente
        return NextResponse.json(
            { error: "Error al enviar el mensaje. Por favor, intenta de nuevo." },
            { status: 500 }
        );
    }
}
