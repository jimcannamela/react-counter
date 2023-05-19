// Component 2: Counter
//   A counter is a box containing a value and 2 buttons. 
//     * The value can be increased or decreased by clicking the + or - buttons.

function Counter({ count, onIncrease, onDecrease }) {

    return (
        <div>
            <h2>Counter</h2>
            <label>{ count }</label><br/>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;