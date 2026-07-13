import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="page">
      <section className="card center">
        <h1>Página no encontrada</h1>
        <p>La página que buscas no existe.</p>

        <Link className="button primary" to="/home">
          Volver al inicio
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage