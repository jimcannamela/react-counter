function SuperDuperCounter({ count, onStart, onStop }) {

    return (
        <div>
            <h2>Super Duper Counter</h2>
            <label>{ count }</label><br/>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
        </div>
    )
}

export default SuperDuperCounter;