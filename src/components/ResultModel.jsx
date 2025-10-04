import { useImperativeHandle,useRef } from "react"

export default function  ResultModel ({targetTime,ref,remainingTime,onReset}) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return{
            open () {
                dialog.current.showModal();
            }
        };
    });

    return <dialog ref={dialog} className="result-modal">
        {userLost && <h2>You Lost</h2>}
        <p>The target time was <strong>{targetTime} Seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> left</p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
}