// auth.js — envoltorios sobre Supabase Auth para login/registro por correo.
// * Google: falta activar el proveedor en Supabase (Authentication → Providers).
import { supabase } from './supabaseClient'

export function signUpWithEmail(email, password, fullName) {
  return supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  })
}

export function signInWithEmail(email, password) {
  return supabase.auth.signInWithPassword({ email, password })
}

export function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${window.location.origin}/home` },
  })
}
