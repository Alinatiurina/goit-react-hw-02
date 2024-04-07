export default function Feedback({total, positive, feedback: {
    good,
    neutral,
    bad,
}}) {
    
        return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total }</p>
            <p>Positive:{positive }</p>
        </div>
    )}
