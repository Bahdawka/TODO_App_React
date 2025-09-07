import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'


const IdleTimer = () => {
  const [event, setEvent] = useState<string>('Event')
  const [count, setCount] = useState<number>(0)
  const [elapsed, setElapsed] = useState<number>(0)

  const onAction = (event?: Event) => {
    setEvent(event?.type ?? 'Event')
    setCount(count + 1)
  }

  const { getElapsedTime } = useIdleTimer({
    onAction,
    timeout: 10_000,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.ceil(getElapsedTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className="activity-bar">
      <h1>Activity Bar</h1>
      <p>Last Event: {event}</p>
      <p>Action Events: {count}</p>
      <p>{elapsed} seconds spended</p>
    </div>
  )
}

export default IdleTimer