import { Link } from 'react-router-dom'

const lessons = [
  { id: 'vocales', title: 'Vocales', unit: 'Unidad 1' },
  { id: 'm', title: 'Letra M', unit: 'Unidad 1' },
  { id: 'l', title: 'Letra L', unit: 'Unidad 1' },
  { id: 's', title: 'Letra S', unit: 'Unidad 1' },
  { id: 'y', title: 'Letra Y', unit: 'Unidad 1' },
  { id: 'r', title: 'Letra R', unit: 'Unidad 1' },
  { id: 'p', title: 'Letra P', unit: 'Unidad 1' },
  { id: 't', title: 'Letra T', unit: 'Unidad 1' },
  { id: 'n', title: 'Letra N', unit: 'Unidad 1' },
]

function LessonsPage() {
  return (
    <main className="page">
      <section className="card">
        <h1>Lecciones</h1>
        <p>Selecciona una lección para comenzar.</p>

        <div className="lesson-list">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              className="lesson-card"
              to={`/lecciones/${lesson.id}`}
            >
              <span>{lesson.unit}</span>
              <strong>{lesson.title}</strong>
            </Link>
          ))}
        </div>

        <Link className="text-link" to="/home">
          Volver al inicio
        </Link>
      </section>
    </main>
  )
}

export default LessonsPage