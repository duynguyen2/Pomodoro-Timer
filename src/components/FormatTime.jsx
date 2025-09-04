import React from 'react';

// function to format the time in the mm:ss format and filling a 0 if it is a single digit
const FormatTime = ({ timeLeft }) => {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    return <h1>{minutes}:{seconds}</h1>;
};

export default FormatTime;