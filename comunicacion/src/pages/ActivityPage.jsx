import { Link, useParams } from 'react-router-dom'

function ActivityPage() {
  const { activityId } = useParams()

  return (
    <main className="page">
      <section className="card center">
        <h1>Actividad</h1>
        <p>Actividad actual: {activityId}</p>

        <div className="card small">
          <h2>Instrucción</h2>
          <p>Escucha la instrucción y selecciona la respuesta correcta.</p>

          <button className="button secondary" type="button">
            Escuchar audio
          </button>
        </div>

        <div className="button-group">
          <Link className="button primary" to="/progreso">
            Terminar actividad
          </Link>

          <Link className="button secondary" to="/lecciones">
            Volver a lecciones
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ActivityPage