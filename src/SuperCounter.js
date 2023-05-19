// Component 3: SuperCounter
//   When there are 3 Counter components on the screen, they automatically combine to create a SuperCounter.
//     * This means the three Counters will disappear, and the SuperCounter will appear.
//     * The SuperCounter's initial value will be equal to the sum of the values of the removed Counters.
//     * The SuperCounter's value increases or decreases by 3 when its + or - buttons are clicked.

function SuperCounter({ count, onIncrease, onDecrease }) {

    return (
        <div>
            <h2>Super Counter</h2>
            <label>{ count }</label><br/>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default SuperCounter;