import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormatTime from './components/FormatTime.jsx';
import Controls from './components/Controls.jsx';
import Settings from './components/Settings.jsx';
import Alarm from './components/Alarm.jsx';


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
  const [volume, setVolume] = useState(0.4);
  const songRef = useRef(null);

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

  return (
    
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <img src="/public/pomodoro-technique.png" />
      <h1 style={ { backgroundColor: "#0a0a0a", padding: "1rem", borderRadius: "0.5rem"} }>Pomodoro Timer</h1>
      <h2>Mode: {mode === "pomodoro" ? "Focus Time" : "Break"}</h2>
      <h2>Time Remaining: </h2> <FormatTime timeLeft={timeLeft}/>
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
      <script>
        const audio = document.getElementById("song");
        audio.volume(0.1);
      </script>
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