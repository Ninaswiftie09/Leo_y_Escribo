import { Link } from 'react-router-dom'

function Card({
  children,
  to,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = '',
  icon: Icon,
  variant = 'default',
  selected = false,
  clickable = false,
  footer,
  className = '',
  ...props
}) {
  const cardClasses = [
    'app-card',
    `app-card--${variant}`,
    selected ? 'app-card--selected' : '',
    clickable || to ? 'app-card--clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {imageSrc && (
        <img className="app-card__image" src={imageSrc} alt={imageAlt} />
      )}

      {Icon && <Icon className="app-card__icon" aria-hidden="true" />}

      {(title || subtitle || description) && (
        <div className="app-card__content">
          {title && <h3 className="app-card__title">{title}</h3>}
          {subtitle && <p className="app-card__subtitle">{subtitle}</p>}
          {description && <p className="app-card__description">{description}</p>}
        </div>
      )}

      {children}

      {footer && <div className="app-card__footer">{footer}</div>}
    </>
  )

  if (to) {
    return (
      <Link className={cardClasses} to={to} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <article className={cardClasses} {...props}>
      {content}
    </article>
  )
}

export default Card