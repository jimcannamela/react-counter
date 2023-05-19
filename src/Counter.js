// Component 2: Counter
//   A counter is a box containing a value and 2 buttons. 
//     * The value can be increased or decreased by clicking the + or - buttons.

import React from "react";

function Counter(props) {
    return (
        <div>
            <h2>Counter</h2>
            <label>0</label><br/>
            <button>+</button>
            <button>-</button>
        </div>
    )
}

export default Counter;