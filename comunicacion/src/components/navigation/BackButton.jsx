import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Button from '../common/Button'

function BackButton({ label = 'Volver', to, className = '' }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (to) {
      navigate(to)
      return
    }

    navigate(-1)
  }

  return (
    <Button
      variant="secondary"
      icon={ArrowLeft}
      className={className}
      onClick={handleBack}
    >
      {label}
    </Button>
  )
}

export default BackButton