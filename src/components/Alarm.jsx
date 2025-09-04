import React from "react";

// function to play an alarm sound as timer ends
// will implement it to play when it reaches about 5/10 minutes on the timer to give a heads-up the time block will end
const Alarm = () => {
    return (
        <audio src="../public/public_alarm.mp3"></audio>
    );
}

export default Alarm;