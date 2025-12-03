# Configuración de Resend para el Formulario de Contacto

## Variables de Entorno Necesarias

Crea un archivo `.env.local` en la raíz del proyecto `web/` con las siguientes variables:

```env
# API Key de Resend
# Obtén tu API key en: https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Email desde el cual se enviarán los correos
# Debe ser un dominio verificado en Resend
# Para pruebas puedes usar: onboarding@resend.dev
# Para producción: nombre@tudominio.com (debe estar verificado en Resend)
RESEND_FROM_EMAIL=noreply@tudominio.com

# Email al que llegarán los mensajes del formulario de contacto
# Este es tu email principal donde recibirás los mensajes
CONTACT_EMAIL=tu-email@ejemplo.com
```

## Pasos para Configurar Resend

### 1. Crear cuenta en Resend
1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita (100 emails/día gratis)

### 2. Obtener API Key
1. Ve a [API Keys](https://resend.com/api-keys)
2. Crea una nueva API Key
3. Copia la clave (empieza con `re_`)

### 3. Verificar Dominio (Opcional para Producción)
Si quieres usar tu propio dominio:
1. Ve a [Domains](https://resend.com/domains)
2. Agrega tu dominio
3. Configura los registros DNS según las instrucciones
4. Una vez verificado, usa `noreply@tudominio.com` en `RESEND_FROM_EMAIL`

### 4. Para Pruebas (Sin Dominio Verificado)
Puedes usar el dominio de prueba de Resend:
```env
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=tu-email@ejemplo.com
```

## Características de Seguridad Implementadas

✅ **Rate Limiting**: Máximo 3 envíos por minuto por IP
✅ **Validación de Inputs**: Sanitización y validación de todos los campos
✅ **Protección contra XSS**: Limpieza de caracteres peligrosos
✅ **Validación de Email**: Verificación de formato y longitud
✅ **Límites de Longitud**: Prevención de ataques de buffer overflow
✅ **Validación en Frontend y Backend**: Doble capa de seguridad

## Formato del Email

Los emails recibidos incluirán:
- Nombre del contacto
- Email (con enlace para responder)
- Tipo de proyecto
- Presupuesto aproximado
- Mensaje completo
- Diseño HTML profesional con los colores de la marca

Puedes responder directamente al email para contactar con el cliente.

## Solución de Problemas

### Error: "RESEND_API_KEY no está configurada"
- Verifica que el archivo `.env.local` existe
- Asegúrate de que la variable `RESEND_API_KEY` está correctamente escrita
- Reinicia el servidor de desarrollo después de agregar variables de entorno

### Error: "CONTACT_EMAIL no está configurado"
- Agrega la variable `CONTACT_EMAIL` en `.env.local`
- O usa `RESEND_FROM_EMAIL` como alternativa

### Los emails no llegan
- Verifica que la API Key es correcta
- Revisa la consola del servidor para ver errores
- En desarrollo, verifica que estás usando un email válido
- Revisa la carpeta de spam

### Rate Limit Excedido
- El sistema permite máximo 3 envíos por minuto por IP
- Espera 1 minuto antes de intentar de nuevo
- En producción, considera usar Redis para rate limiting distribuido

