// Component 1: App
//   The App component should contain the entire application.  
//     * It should have a button to create new counters.
//     * It shouold also have an area to display existing counters.
//     * When the page loads, it should have no counters on it.

// States - no counters / 1 counter / 2 counters 

// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import CounterDisplay from './CounterDisplay.js';
import Counter from './Counter.js';

function App() {

const [counters, setCounters] = useState([])
const [count, setCount] = useState(0)

function addCounter() {
  const newCounter = 0;
  setCounters ([...counters, newCounter])
  console.log(counters)
}


function increase(idx){
  const countersCopy = [...counters];
  countersCopy[idx] = countersCopy[idx] + 1
  setCounters(countersCopy)
}
function decrease(){
  if (count > 0){
    setCounters(count - 1)
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>CountCorp</h1>
        <h4>You can count on us!</h4>
      </header>
      <section>
        <button onClick={ addCounter }>Create counter</button>
      </section>
      <section>
        {counters.map((c, idx) => <Counter
        count={c}
        onIncrease={() => increase(idx)}
        />)}
      </section>
    </div>
  );
}

export default App;
