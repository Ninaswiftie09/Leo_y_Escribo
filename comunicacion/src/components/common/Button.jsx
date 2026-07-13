import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props
}) {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    Icon ? 'btn--with-icon' : '',
    fullWidth ? 'btn--full' : '',
    disabled ? 'btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="btn__icon" aria-hidden="true" />
      )}

      <span className="btn__label">{children}</span>

      {Icon && iconPosition === 'right' && (
        <Icon className="btn__icon" aria-hidden="true" />
      )}
    </>
  )

  if (to && !disabled) {
    return (
      <Link className={buttonClasses} to={to} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button