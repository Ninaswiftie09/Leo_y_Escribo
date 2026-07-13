import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <main className="page">
      <section className="card">
        <h1>Iniciar sesión (este es un login TEMPORAL)</h1>
        <p>Elige cómo quieres acceder.</p>

        <div className="grid">
          <div className="card small">
            <h2>Estudiante</h2>
            <label htmlFor="student-code">Código</label>
            <input id="student-code" type="text" placeholder="Ej. 123456" />

            <Link className="button primary" to="/home">
              Entrar
            </Link>
          </div>

          <div className="card small">
            <h2>Docente</h2>
            <label htmlFor="email">Correo</label>
            <input id="email" type="email" placeholder="correo@ejemplo.com" />

            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" placeholder="********" />

            <Link className="button secondary" to="/home">
              Ingresar
            </Link>
          </div>
        </div>

        <Link className="text-link" to="/">
          Volver
        </Link>
      </section>
    </main>
  )
}

export default LoginPage