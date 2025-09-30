export default function  ResultModel ({result,targetTime}) {
    return <dialog className="result-modal" open>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} Seconds.</strong></p>
        <p>You stopped the timer with X seconds left</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}