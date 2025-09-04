import React from 'react';

const FormatTime = ({ timeLeft }) => {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    return <h1>{minutes}:{seconds}</h1>;
};

export default FormatTime;