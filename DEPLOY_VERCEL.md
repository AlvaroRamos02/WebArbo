# 🚀 Desplegar en Vercel - Configuración de Variables de Entorno

## ✅ Lo bueno: **NO necesitas cambiar NADA en el código**

El código ya está preparado para usar variables de entorno. Solo necesitas configurarlas en Vercel.

---

## 📋 Paso a Paso: Configurar Variables en Vercel

### Opción 1: Desde el Dashboard de Vercel (Recomendado)

1. **Ve a tu proyecto en Vercel**
   - Entra a [vercel.com](https://vercel.com)
   - Selecciona tu proyecto

2. **Ve a Settings → Environment Variables**
   - En el menú lateral, haz clic en **Settings**
   - Luego haz clic en **Environment Variables**

3. **Agrega las 3 variables necesarias:**

   **Variable 1:**
   ```
   Name: RESEND_API_KEY
   Value: re_tu_api_key_aqui
   ```
   - ✅ Marca: Production, Preview, Development

   **Variable 2:**
   ```
   Name: RESEND_FROM_EMAIL
   Value: onboarding@resend.dev
   ```
   - ✅ Marca: Production, Preview, Development
   - 💡 Puedes seguir usando `onboarding@resend.dev` (gratis) o usar tu dominio verificado

   **Variable 3:**
   ```
   Name: CONTACT_EMAIL
   Value: tu-email@gmail.com
   ```
   - ✅ Marca: Production, Preview, Development
   - 📧 Tu email donde quieres recibir los mensajes

4. **Guarda y redespliega**
   - Haz clic en **Save** en cada variable
   - Ve a **Deployments** y haz clic en los 3 puntos (⋯) del último deployment
   - Selecciona **Redeploy**

---

### Opción 2: Desde la CLI de Vercel

```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Agregar variables
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add CONTACT_EMAIL

# Redesplegar
vercel --prod
```

---

## 🎯 ¿Qué cambia entre Local y Producción?

### **Nada en el código** ✅
- El código es el mismo
- Usa las mismas variables de entorno
- Funciona exactamente igual

### **Solo cambia dónde están las variables:**
- **Local**: En `.env.local` (no se sube a Git)
- **Producción**: En Vercel Dashboard (configuración del servidor)

---

## 📧 Opciones para RESEND_FROM_EMAIL

### Opción A: Seguir con el dominio de prueba (Gratis) ✅
```
RESEND_FROM_EMAIL=onboarding@resend.dev
```
- ✅ **Gratis**
- ✅ **No necesitas verificar dominio**
- ✅ **Funciona perfectamente**
- ⚠️ Los emails salen de `onboarding@resend.dev`

### Opción B: Usar tu dominio personalizado (Recomendado para producción)
```
RESEND_FROM_EMAIL=noreply@tudominio.com
```
- ✅ **Más profesional**
- ✅ **Mejor deliverability**
- ⚠️ Necesitas verificar tu dominio en Resend
- ⚠️ Configurar registros DNS

**Para verificar tu dominio:**
1. Ve a [resend.com/domains](https://resend.com/domains)
2. Agrega tu dominio
3. Configura los registros DNS que te indique
4. Espera a que se verifique (puede tardar unas horas)

---

## 🔍 Verificar que Funciona

1. **Despliega tu proyecto en Vercel**
   ```bash
   vercel --prod
   ```
   O conecta tu repositorio de GitHub y se desplegará automáticamente.

2. **Prueba el formulario en producción**
   - Ve a tu sitio en Vercel
   - Completa el formulario de contacto
   - Envía el mensaje

3. **Revisa tu email**
   - Deberías recibir el email en `CONTACT_EMAIL`
   - Si no llega, revisa la carpeta de Spam

4. **Revisa los logs de Vercel**
   - Ve a **Deployments** → Selecciona el deployment → **Functions**
   - Busca `/api/contact`
   - Deberías ver logs como: `✅ Email enviado correctamente`

---

## 🐛 Solución de Problemas

### Error: "RESEND_API_KEY no está configurada"
- ✅ Verifica que agregaste la variable en Vercel
- ✅ Asegúrate de que marcaste **Production**
- ✅ Redespliega el proyecto después de agregar variables

### Error: "CONTACT_EMAIL no está configurado"
- ✅ Agrega la variable `CONTACT_EMAIL` en Vercel
- ✅ O usa `RESEND_FROM_EMAIL` como alternativa (se usará automáticamente)

### Los emails no llegan en producción
1. Verifica que las variables están configuradas correctamente
2. Revisa los logs de Vercel para ver errores
3. Verifica que tu API key de Resend es válida
4. Revisa la carpeta de Spam
5. Verifica que no excediste el límite de 100 emails/día

### El formulario funciona en local pero no en Vercel
- ✅ Asegúrate de que agregaste las variables en Vercel (no solo en `.env.local`)
- ✅ Redespliega después de agregar variables
- ✅ Verifica que las variables están marcadas para **Production**

---

## 📝 Resumen Rápido

1. ✅ **Sube tu código a Vercel** (GitHub, GitLab, o CLI)
2. ✅ **Ve a Settings → Environment Variables**
3. ✅ **Agrega las 3 variables:**
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` (usa `onboarding@resend.dev` si no tienes dominio)
   - `CONTACT_EMAIL`
4. ✅ **Redespliega el proyecto**
5. ✅ **¡Listo! Prueba el formulario**

---

## 💡 Tips Adicionales

- **Variables por entorno**: Puedes tener valores diferentes para Development, Preview y Production
- **Secrets**: Vercel encripta automáticamente las variables de entorno
- **Límites de Resend**: 100 emails/día gratis, suficiente para empezar
- **Monitoreo**: Revisa los logs de Vercel para ver si hay errores

---

## 🎉 ¡Eso es todo!

Una vez configuradas las variables, tu formulario funcionará exactamente igual que en local, pero en producción. No necesitas cambiar nada más en el código.


