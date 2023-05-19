function SuperDuperCounter({ count, onStart }) {

    return (
        <div>
            <h2>Super Duper Counter</h2>
            <label>{ count }</label><br/>
            <button onClick={onStart}>Start</button>
        </div>
    )
}

export default SuperDuperCounter;