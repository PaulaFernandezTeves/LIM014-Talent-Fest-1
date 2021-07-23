import React from "react";
import '../../../styles/brighit.css'

const Timer = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        }, 10);
        } else if (!timerOn) {
        clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);

    return (
        <div className="Timers">
        <div id="display">
            <span>{("0" + Math.floor((time / (60000*60*24)))).slice(-3)} DÍAS </span>
            <span>{("0" + Math.floor((time / (60000*60)) % 24)).slice(-2)} HORAS </span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} MINUTOS </span> {/*  6000 ES UN SEGUNDO Y HAY 60 SEGUNDOS EN 1 MINUTO Y (1000 MILISEGUNDOS POR 60)=1 MIN  / Y 60 POR QUE HAY 60  */}
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span> {/*  1000 ES UN SEGUNDO Y HAY 60 SEGUNDOS EN 1 MINUTO */}
            {/* <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
        </div>

        <div id="buttons">
            {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
            )}
            {/* {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>} */}
            {timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
            )}
            {/* {!timerOn && time > 0 && (
            <button onClick={() => setTimerOn(true)}>Resume</button>
            )} */}
        </div>
        </div>
    );
};

export default Timer;