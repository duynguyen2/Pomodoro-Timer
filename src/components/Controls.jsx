import React from "react";

const Controls = ({ isActive, setIsActive, reset}) => {
    return (
        <div style={{ marginTop: "1rem" }}>
            <button onClick={() => setIsActive(!isActive) }>
                { isActive ? "Pause" : "Start" }
            </button>
            
            <button onClick={reset} style={ { marginLeft: "0.5rem" } } >
                Reset
            </button>
        </div>
    );

};

export default Controls;