import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main className="page">
      <section className="card center">
        <h1>Inicio</h1>
        <p>¿Qué quieres practicar hoy?</p>

        <div className="button-group">
          <Link className="button primary" to="/lecciones">
            Ver lecciones
          </Link>

          <Link className="button secondary" to="/progreso">
            Ver progreso
          </Link>

          <Link className="button secondary" to="/">
            Cerrar sesión
          </Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage