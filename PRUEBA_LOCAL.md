# 🚀 Guía Rápida: Probar el Formulario en Local

## Paso 1: Crear el archivo `.env.local`

En la carpeta `web/`, crea un archivo llamado `.env.local` (sin comillas) con este contenido:

```env
RESEND_API_KEY=re_tu_api_key_aqui
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=arbor.webworks@gmail.com
```

**Reemplaza:**
- `re_tu_api_key_aqui` → Tu API key de Resend (la que empieza con `re_`)
- `arbor.webworks@gmail.com` → **DEBE ser el mismo email que usaste para crear tu cuenta en Resend**

⚠️ **IMPORTANTE:** Resend en modo gratuito solo permite enviar a tu propio email. Usa el email con el que te registraste en Resend.

## Paso 2: Iniciar el servidor

```bash
cd web
npm run dev
```

## Paso 3: Probar el formulario

1. Abre tu navegador en `http://localhost:3000`
2. Ve al formulario de contacto (al final de la página)
3. Completa el formulario con datos de prueba
4. Envía el formulario

## Paso 4: Verificar el correo

- Revisa tu bandeja de entrada de Gmail
- Si no aparece, revisa la carpeta de **Spam/Promociones**
- El email debería verse bonito con los colores de tu marca

## ✅ ¿Funciona igual que en producción?

**Sí**, funciona exactamente igual. La única diferencia es:
- En local: usas `onboarding@resend.dev` (gratis, sin verificar dominio)
- En producción: puedes usar tu dominio verificado (ej: `noreply@tudominio.com`)

## 💰 ¿Cuánto cuesta?

**Nada, es completamente gratis:**
- Resend tiene 100 emails/día gratis
- El dominio `onboarding@resend.dev` es gratis para pruebas
- No necesitas verificar ningún dominio

## 🔧 Solución de Problemas

### Error: "RESEND_API_KEY no está configurada"
- Verifica que el archivo se llama exactamente `.env.local` (con el punto al inicio)
- Asegúrate de estar en la carpeta `web/`
- Reinicia el servidor después de crear el archivo

### El email no llega
1. Verifica que `CONTACT_EMAIL` sea tu email correcto
2. Revisa la consola del servidor (debería mostrar ✅ si se envió)
3. Revisa la carpeta de Spam en Gmail
4. Verifica que tu API key sea correcta en Resend

### Error 429 (Demasiadas solicitudes)
- Espera 1 minuto (hay rate limiting de 3 envíos/minuto)
- Esto es normal y protege contra spam

## 📧 Vista Previa del Email

El email que recibirás tendrá:
- ✨ Diseño profesional con gradiente azul-violeta
- 📋 Todos los datos del formulario organizados
- 🔗 Email clickeable para responder
- 📱 Diseño responsive (se ve bien en móvil)
- 🎨 Colores de tu marca (azul #1D4ED8 y violeta #8b5cf6)

