import { BookOpen, PencilLine } from 'lucide-react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import '../styles/landing.css'

function WelcomePage() {
  return (
    <main className="page landing-page">
      <section className="landing-page__content" aria-labelledby="landing-title">
        <header className="landing-page__header">
          <span className="badge">Plataforma educativa</span>
          <h1 id="landing-title">¡Bienvenido!</h1>
          <p>Elige el proyecto con el que deseas aprender.</p>
        </header>

        <div className="landing-page__projects">
          <Card
            className="project-card project-card--communication"
            icon={BookOpen}
            title="Leo y Escribo"
            description="Practica la lectura  con lecciones y actividades."
            footer={(
              <Button to="/login" fullWidth>
                Ingresar
              </Button>
            )}
          />

          <Card
            className="project-card project-card--upcoming"
            icon={PencilLine}
            title="proyecto I"
            description="Este espacio para el otro proyecto"
            footer={(
              <Button variant="secondary" fullWidth disabled>
                Próximamente
              </Button>
            )}
          />
        </div>
      </section>
    </main>
  )
}

export default WelcomePage
