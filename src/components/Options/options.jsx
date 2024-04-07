export default function Options({updateFeedback, reset, total}) {
    return (
        <>
            <button onClick={()=>updateFeedback('good')}>Good</button>
            <button onClick={()=>updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
            {total != 0 && <button onClick={reset}>Reset</button>}
        </>
    )
}