import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} result="Lost"/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Started"} Challenge
        </button>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is Running ....." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
