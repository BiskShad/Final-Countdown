import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";


//Editando el timer, usando useRef
export default function TimerChallenge({title, targetTime}) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    
    const timerIsActive = timeRemaining > 0 && timeRemaining  < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        
    }

    function handleStart() {
         timer.current = setInterval(() => {
            setTimeRemaing(prevTimeRemaining => prevTimeRemaining -10);
            }, 10);

    }


    function handleStop() {
        clearInterval(timer.current);
    }

    return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} result='lost'/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenged
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    </>
    )
}