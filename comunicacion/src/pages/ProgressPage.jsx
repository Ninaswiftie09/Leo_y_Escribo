import { Link } from 'react-router-dom'

function ProgressPage() {
  return (
    <main className="page">
      <section className="card center">
        <h1>Mi progreso</h1>
        <p>Estos son tus avances en el módulo de Comunicación.</p>

        <div className="card small">
          <h2>Estrellas ganadas</h2>
          <p>⭐ ⭐ ⭐</p>
          <p>Lecciones completadas: 3</p>
        </div>

        <div className="button-group">
          <Link className="button primary" to="/lecciones">
            Continuar aprendiendo
          </Link>

          <Link className="button secondary" to="/home">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProgressPage