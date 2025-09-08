import { React, useRef } from "react";

// function to play an alarm sound as timer ends
// will implement it to play when it reaches about 5/10 minutes on the timer to give a heads-up the time block will end
const Alarm = () => {
    const alarmRef = useRef(null);
    
    const playAlarm = () => {
        if(alarmRef.current) {
            alarmRef.current.currentTime = 0;
            alarmRef.current.play();
        }
    }

    return (
        <audio ref={alarmRef} src='public/public_alarm.mp3'></audio>
    );
}

export default Alarm;