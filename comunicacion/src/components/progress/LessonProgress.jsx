import { Star } from 'lucide-react'

function LessonProgress({ lessons = [], currentLessonId }) {
  return (
    <div className="lesson-progress">
      {lessons.map((lesson) => {
        const isCurrent = lesson.id === currentLessonId
        const isCompleted = Boolean(lesson.completed)

        const itemClasses = [
          'lesson-progress__item',
          isCompleted ? 'lesson-progress__item--completed' : '',
          isCurrent ? 'lesson-progress__item--current' : '',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <div className={itemClasses} key={lesson.id}>
            <div className="lesson-progress__marker">
              <Star className="lesson-progress__icon" aria-hidden="true" />
            </div>

            <span className="lesson-progress__label">{lesson.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default LessonProgress