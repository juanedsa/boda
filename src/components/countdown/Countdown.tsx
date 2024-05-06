import { useEffect, useState } from 'react'

import './Countdown.css'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const targetDate: number = new Date('2024-10-05T16:00:00').getTime()
    const now = new Date().getTime()
    const diff = targetDate - now

    if (diff < 0) {
      return { days: 0, hours: 0, min: 0, seg: 0 }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )

    const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seg = Math.floor((diff % (1000 * 60)) / 1000)
    return { days, hours, min, seg }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown">
      <img src="13.png" />
      <div className="countdown__numbers">
        <span>{timeLeft.days}</span>
        <span>{timeLeft.hours}</span>
        <span>{timeLeft.min}</span>
        <span>{timeLeft.seg}</span>
      </div>
      <div className="countdown__labels">
        <span>Días</span>
        <span>Horas</span>
        <span>Min</span>
        <span>Seg</span>
      </div>
    </div>
  )
}

export { Countdown }
