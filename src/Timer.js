import {React, useState} from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // default pomodoro time
    const [isActive, setIsActive] = useState(false); // start as inactive
    const [mode, setMode] = useState('pomodoro'); // modes will be pomodoro, short break and long break

    const startTimer = () => {
        setIsActive(true);

        while(timeLeft > 0) {

        }

        return;
    }

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(25 * 60);
        setMode('pomodoro');
    }

    const pauseTimer = () => {
        setIsActive(false);
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString.padStart(2, '0')}:${remainingSeconds.toString.padStart(2, '0')}`;
    }

    return (
        <>
            <div>
                <div className='mode-selection'>
                    <button 
                        className='pomodoro button'
                        onClick={() => {
                            setMode('pomodoro');
                            setIsActive(false);
                            setTimeLeft(25 * 60);
                        }}
                    >
                    Reset
                    </button>
                    <button 
                        className='short-break button'
                        onClick={() => {
                            setMode('shortBreak');
                            setIsActive(false);
                            setTimeLeft(10 * 60);
                        }}
                    >
                    Short Break
                    </button>
                </div>
                <h2>Time remaining: {formatTime(timeLeft)}</h2>
            </div>
        </>
    );
}

export default Timer;