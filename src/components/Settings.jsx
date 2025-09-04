import React from "react";

const Settings = ({ mode, setMode, setTimeLeft }) => {
    // const variables for the set times
    const POMODORO_TIME = 25 * 60;
    const SHORT_BREAK = 10 * 60;
    const LONG_BREAK = 15 * 60;

    return (
        <div>
            <button style={{ margin: "0.5rem" }} onClick={ () => {
                setMode("pomodoro");
                setTimeLeft(POMODORO_TIME);
            }}>
                Focus/Work
            </button>

            <button style={{ margin: "0.5rem" }} onClick={ () => {
                setMode("shortBreak");
                setTimeLeft(SHORT_BREAK);
            }}>
                Short Break
            </button>

            <button style={{ margin: "0.5rem" }} onClick={ () => {
                setMode("longBreak");
                setTimeLeft(LONG_BREAK);
            }}>
                Long Break
            </button>
        </div>
    );
};

export default Settings;