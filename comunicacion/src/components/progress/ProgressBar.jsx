function ProgressBar({ value = 0, max = 100, label = 'Progreso' }) {
  const safeMax = max <= 0 ? 100 : max
  const percentage = Math.min(Math.max((value / safeMax) * 100, 0), 100)

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar-wrapper__header">
        <span>{label}</span>
        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
        <div
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar