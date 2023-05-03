import { FC, useContext, useEffect, useState } from 'react'

import TimerContext from '../../contexts/timer-context';

interface TimerProps {
  timerStyle?: string;
}

const Timer: FC<TimerProps> = ({ timerStyle = '' }) => {
  const { timer, setTimer } = useContext(TimerContext);
  const [timerColor, setTimerColor] = useState('text-neutral-light');

  useEffect(() => {
    const interval = setInterval(() => {
      // set to 41 and 21 because react doesn't re-render immediately
      if (timer === 41) {
        setTimerColor('text-status-warning');
      }

      if (timer === 21) {
        setTimerColor('text-status-error');
      }

      setTimer((prevTimer: number) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <span className={`text-h3 text-neutral-light ${timerColor} ${timerStyle}`}>{timer}</span>
  )
}

export default Timer