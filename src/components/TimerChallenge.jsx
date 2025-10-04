import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
  const[timeRemaining,setTimeRemaining]=useState(targetTime * 1000);


  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // stopping the timer if the timer expired not only after stop is presses
  if (timeRemaining <= 0) {
      clearInterval(timer.current); 
      dialog.current.open();  
  }

  function handleReset(){
    setTimeRemaining(targetTime*1000);  
  }

  function handleStart() {
    // set interval exectues the function everytime the times is expired.
    timer.current = setInterval(() => {
      setTimeRemaining((previousTimeRemaining) => previousTimeRemaining-10)
    },10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Started"} Challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running ....." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
