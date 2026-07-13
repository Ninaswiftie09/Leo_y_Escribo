import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <main className="page">
      <section className="card center">
        <h1>Leo y Aprendo</h1>
        <p>Módulo de Comunicación</p>
        <p>esto solo es para ver la navegación de la página</p>

        <div className="button-group">
          <Link className="button primary" to="/login">
            Empezar
          </Link>

          <Link className="button secondary" to="/home">
            Entrar como prueba
          </Link>
        </div>
      </section>
    </main>
  )
}

export default WelcomePage