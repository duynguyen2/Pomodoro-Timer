import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormatTime from './components/FormatTime.jsx';
import Controls from './components/Controls.jsx';



function App() {
  const POMODORO_TIME = 25 * 60;
  const SHORT_BREAK = 10 * 60;
  const LONG_BREAK = 15 * 60;

  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("pomodoro");

  useEffect(() => {
    let interval = null;
    if(isActive) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    switch(mode) {
      case "pomodoro":
          setMode("pomodoro");
          setTimeLeft(POMODORO_TIME);
          break;
      case "shortBreak":
          setMode("shortBreak");
          setTimeLeft(SHORT_BREAK);
          break;
      case "longBreak":
          setMode("longBreak");
          setTimeLeft(LONG_BREAK);
          break;
      default:
        setMode("pomodoro");
    };
  }, [mode, timeLeft]);

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

  return (
    
    <div>
      <a href="https://vite.dev" target="_blank"></a>
      <h1>Pomodoro Timer</h1>
      <h2>Mode: {mode === "pomodoro" ? "Focus Time" : "Break"}</h2>
      <h2>Time Remaining: <FormatTime timeLeft={timeLeft}/></h2>
      <h2>It is now {mode === "pomodoro" ? "Work Time" : "Break Time"}</h2>
      <FormatTime timeLeft={timeLeft} />
      <Controls 
        isActive={isActive}
        setIsActive={setIsActive}
        reset={() => {
          setIsActive(false);
          setTimeLeft(mode === "pomodoro" ? POMODORO_TIME : SHORT_BREAK);
        }}
      />

    </div>
    

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