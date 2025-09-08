import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormatTime from './components/FormatTime.jsx';
import Controls from './components/Controls.jsx';
import Settings from './components/Settings.jsx';
import Alarm from './components/Alarm.jsx';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function App() {

  // const variables for the set times
  const POMODORO_TIME = 25 * 60;
  const SHORT_BREAK = 10 * 60;
  const LONG_BREAK = 15 * 60;

  //const [count, setCount] = useState(0);

  /* states for the timer */
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME); // time remaining
  const [isActive, setIsActive] = useState(false); // timer is active or not
  const [mode, setMode] = useState("pomodoro"); // mode for timer (e.g. work time, break)
  const [cycles, setCycles] = useState(4); // how many times does each cycle go through
  const [volume, setVolume] = useState(0.5);
  const [fullPercentage, setFullPercentage] = useState(POMODORO_TIME);
  const songRef = useRef(null);

  const getPathColor = () => {
    if(mode === 'pomodoro') {
      return '#ff6347';
    } else if(mode === 'shortBreak') {
      return '#87CEFA';
    } else {
      return '#3c8fc7ff';
    }
  }

  // timer running countdown
  useEffect(() => {
    let interval = null;
    if(isActive) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      
    }

    return () => clearInterval(interval);
  }, [isActive]);

  // mode transitioning
  useEffect(() => {
    if(timeLeft === 0) {
      if(mode === "pomodoro") {
        setMode("shortBreak");
        setTimeLeft(SHORT_BREAK);
      } else {
        setMode("pomodoro");
        setTimeLeft(POMODORO_TIME);
      }
      
    }
  }, [timeLeft, mode]);

  useEffect(() => {
    if(!songRef.current) {
      return;
    }

    if(isActive) {
      songRef.current.play().catch(() => {
        console.log("Audio playback is blocked until the user interacts");
      })
    } else {
      songRef.current.pause();
    }
  }, [isActive]);

  useEffect(() => {
    if(songRef.current) {
      songRef.current.volume = volume;
    }
  }, [volume]);

  // Calculate percentage for CircularProgressbar
  // Update the visual of the progress bar dynamically to each timer setting
  useEffect(() => {
    switch(mode) {
      case('pomodoro'):
        setFullPercentage(POMODORO_TIME);
        break;
      case('shortBreak'):
        setFullPercentage(SHORT_BREAK);
        break;
      case('longBreak'):
        setFullPercentage(LONG_BREAK);
        break;
      default:
        setFullPercentage(POMODORO_TIME);
    }
  }, [mode, fullPercentage]);
  const percentage = (timeLeft / fullPercentage) * 100;

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  
  return (
    
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <img src="/public/pomodoro-technique.png" />
      <h1 style={ { backgroundColor: "#3c8fc7ff", padding: "1rem", borderRadius: "0.5rem"} }>Pomodoro Timer</h1>
      <h2>Mode: {mode === "pomodoro" ? "Focus Time" : "Break"}</h2>
      <h2>Time Remaining: </h2>
      <div style={{ marginLeft: '70px', width: '300px'}}>
        <CircularProgressbar
            value={percentage}
            text={`${minutes}:${seconds}`}
            styles={buildStyles({
              pathColor: getPathColor(),
              textColor: getPathColor(),
              trailColor: '#d6d6d6',
              strokeLinecap: 'round',
          })}
        />
      </div>

      <h2>It is now {mode === "pomodoro" ? "Work Time" : "Break Time"}</h2>
      <Controls 
        isActive={isActive}
        setIsActive={setIsActive}
        reset={() => {
          setIsActive(false);
          setTimeLeft(mode === "pomodoro" ? POMODORO_TIME : SHORT_BREAK);
        }}
      />

      <Settings 
        mode={mode}
        setMode={setMode}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />

      <audio ref={songRef} src="04YourTown.mp3" id="song" loop />
      <div>
        <label htmlFor='volume-slider'>Volume:</label>
        <input
          type='range'
          id='volume-slider'
          min='0'
          max='1'
          step='0.01'
          value={volume}
          onChange={ (e) => setVolume(parseFloat(e.target.value)) }
          style={{ marginTop: '1.2rem', marginLeft: '1rem', width: '200px'}}
        />
      </div>

        <Alarm />
      
    </div>
    
    /* keeping vite default return for test server */
    /*
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    */
  );
}

export default App;