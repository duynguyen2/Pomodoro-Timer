import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, {useState, useEffect, useRef} from 'react';
import '../index.css';

const POMODORO_TIME = 25 * 60; // 25 minutes in seconds
const SHORT_BREAK = 10 * 60; // 5 minutes in seconds
const LONG_BREAK = 15 * 60; // 15 minutes in seconds

const PomodoroTimer = ({initialTime, isActive, onTimerEnd}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd();
    }
  }, [timeLeft, onTimerEnd]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-8xl font-bold text-white mb-8">
      {formatTime(timeLeft)}
    </div>
  );
}

export default PomodoroTimer;