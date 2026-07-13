// supabaseClient.js
// Este archivo debe ser IGUAL en los tres repos (login-landing, matematica, comunicacion).
// Crea la conexión al proyecto compartido de Supabase.
//
// >>> VERSIÓN ACTUAL: fase de pruebas con URLs .pages.dev <<<
// Usa la configuración por defecto. La sesión NO se comparte entre
// subdominios todavía (cada módulo pide login por separado), porque
// las URLs .pages.dev son dominios distintos, no subdominios de uno común.
// Cuando tengan dominio propio, se cambia a la versión con cookie
// (ver el bloque comentado al final de este archivo).

import { createClient } from '@supabase/supabase-js'

// -------------------------------------------------------------------
// Datos del proyecto compartido. Son PÚBLICOS y seguros en el frontend.
// (Supabase -> Settings -> API Keys)
// -------------------------------------------------------------------
const SUPABASE_URL = 'https://ltwbbadzlgdrlxqwfgbd.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_BPcMhx3Yy06ZK684RvQohw_yE_IFu7W'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

// ===================================================================
// MÁS ADELANTE — cuando tengan dominio propio (ej. learningapp.com)
// y subdominios (matematica.learningapp.com, lenguaje.learningapp.com),
// reemplacen la línea de arriba "export const supabase = ..." por este
// bloque, para que "iniciar sesión una vez" funcione en toda la
// plataforma. El punto inicial en '.learningapp.com' es obligatorio.
// ===================================================================
//
// const DOMINIO_RAIZ = '.learningapp.com'   // <-- su dominio real
//
// function cookieStorage(dominio) {
//   return {
//     getItem: (key) => {
//       const m = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'))
//       return m ? decodeURIComponent(m[2]) : null
//     },
//     setItem: (key, value) => {
//       document.cookie =
//         `${key}=${encodeURIComponent(value)}; domain=${dominio}; path=/; max-age=604800; SameSite=Lax; Secure`
//     },
//     removeItem: (key) => {
//       document.cookie = `${key}=; domain=${dominio}; path=/; max-age=0; SameSite=Lax; Secure`
//     },
//   }
// }
//
// export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
//   auth: {
//     storage: cookieStorage(DOMINIO_RAIZ),
//     storageKey: 'learningapp-auth',   // mismo nombre en los 3 repos
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: true,
//   },
// })
