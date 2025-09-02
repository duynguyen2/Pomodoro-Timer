import logo from './logo.svg';
import './App.css';
import PomodoroTimer from './components/PomodoroTimer.js';
import  { React, useState, useEffect } from 'react';

const POMODORO_TIME = 25 * 60; // 25 minutes in seconds
const SHORT_BREAK = 10 * 60; // 5 minutes in seconds
const LONG_BREAK = 15 * 60; // 15 minutes in seconds

function App() {
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME); // default pomodoro time
      const [isActive, setIsActive] = useState(false); // start as inactive
      const [mode, setMode] = useState('pomodoro'); // modes will be pomodoro, short break and long break
  
      useEffect(() => {
          let initialTime;
          switch (mode){
              case 'pomodoro':
                  initialTime = POMODORO_TIME;
                  break;
              case 'shortBreak':
                  initialTime = SHORT_BREAK;
                  break;
              case 'longBreak':
                  initialTime = LONG_BREAK;
                  break;
              default:
                  initialTime = POMODORO_TIME;
          }
  
          setTimeLeft(initialTime);
      }, [mode]);
  
      useEffect(() => {
          if(!isActive || timeLeft <= 0) {
              return;
          }
  
          const intervalID = setInterval(() => {
              setTimeLeft(prevTime => prevTime - 1);
          }, [isActive, timeLeft]);
      });
  
      useEffect(() => {
          if(timeLeft === 0) {
              setIsActive(false);
              if(mode === 'pomodoro') {
                  setMode('shortBreak');
              } else {
                  setMode('pomodoro');
              }
          }
      }, [timeLeft, mode]);
  
      const formatTime = (seconds) => {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      }
  
      const handleReset = () => {
          setIsActive(false);
          switch (mode){
              case 'pomodoro':
                  setTimeLeft(POMODORO_TIME);
                  break;
              case 'shortBreak':
                  setTimeLeft(SHORT_BREAK);
                  break;
              case 'longBreak':
                  setTimeLeft(LONG_BREAK);
                  break;
              default:
                  setTimeLeft(POMODORO_TIME);
          }
      };
  
      return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-md">
          <h1 className="text-3xl text-white font-semibold mb-6">Pomodoro Timer</h1>
  
          <div className="flex justify-around mb-8">
            <button
              onClick={() => setMode('pomodoro')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                mode === 'pomodoro' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700'
              }`}
            >
              Pomodoro
            </button>
            <button
              onClick={() => setMode('shortBreak')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                mode === 'shortBreak' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700'
              }`}
            >
              Short Break
            </button>
            <button
              onClick={() => setMode('longBreak')}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                mode === 'longBreak' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700'
              }`}
            >
              Long Break
            </button>
          </div>
  
          <div className="text-8xl font-bold text-white mb-8">
            {formatTime(timeLeft)}
          </div>
  
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md text-xl font-bold hover:bg-indigo-700 transition-colors duration-200"
            >
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-red-600 text-white rounded-md text-xl font-bold hover:bg-red-700 transition-colors duration-200"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      );

  /*
  return (
    <PomodoroTimer/>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
  */
}

export default App;
