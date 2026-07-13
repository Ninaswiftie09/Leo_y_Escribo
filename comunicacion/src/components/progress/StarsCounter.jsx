import { Star } from 'lucide-react'

function StarsCounter({ current = 0, total = 0, label = 'Estrellas' }) {
  return (
    <div className="stars-counter" aria-label={`${current} de ${total} estrellas`}>
      <Star className="stars-counter__icon" aria-hidden="true" />
      <div className="stars-counter__text">
        <strong className="stars-counter__value">
          {current}/{total}
        </strong>
        <span className="stars-counter__label">{label}</span>
      </div>
    </div>
  )
}

export default StarsCounter