// Component 1: App
//   The App component should contain the entire application.  
//     * It should have a button to create new counters.
//     * It shouold also have an area to display existing counters.
//     * When the page loads, it should have no counters on it.

// States - no counters / 1 counter / 2 counters 

// Need to store the state for the counters, superCounters, and SDCounters here

import './App.css';
<<<<<<< HEAD
import { useState } from 'react';
=======
import React, { useState } from 'react';
// import CounterDisplay from './CounterDisplay.js';
>>>>>>> d6b99331d450b0493fc91251533ed551f85900df
import Counter from './Counter.js';
import SuperCounter from './SuperCounter.js';


function App() {

<<<<<<< HEAD
  const [ counters, setCounters ] = useState([]);
  const [ superCounters, setSuperCounters ] = useState([]);
  const [ countersTotal, setCountersTotal] = useState(0);

  function addNewCounter() {
    const newCounter = 0;
    if (counters.length < 2 ) {
      setCounters([...counters, newCounter])
    } else {
      addNewSuperCounter();
    }
  }
=======
const [counters, setCounters] = useState([])
const [count, setCount] = useState(0)

function addCounter() {
  const newCounter = 0;
  setCounters ([...counters, newCounter])
  console.log(counters)
}
>>>>>>> d6b99331d450b0493fc91251533ed551f85900df

  function updateSuperTotal (amount) {
    console.log('amount ' + amount);
    console.log('before ' + countersTotal);
    setCountersTotal(countersTotal + amount);
    console.log('after ' + countersTotal);
  }

<<<<<<< HEAD
  function increase(idx) {
    const countersCopy = [...counters];
    countersCopy[idx] = countersCopy[idx] + 1;
    setCounters(countersCopy);
    updateSuperTotal(1);
  }

  function decrease(idx) {
      const countersCopy = [...counters];
      if ( countersCopy[idx] > 0 ) {
        countersCopy[idx] = countersCopy[idx] - 1;
        setCounters(countersCopy);
      }
  }

  function addNewSuperCounter() {
    const newSuperCounter = 0;
    if (superCounters.length < 2 ) {
      setSuperCounters([...superCounters, newSuperCounter])
    }
  }

  function increaseSuper(idx) {
    const countersCopy = [...superCounters];
    countersCopy[idx] = countersCopy[idx] + 3;
    setSuperCounters(countersCopy);
  }

  function decreaseSuper(idx) {
      const countersCopy = [...counters];
      if ( countersCopy[idx] > 2 ) {
        countersCopy[idx] = countersCopy[idx] - 3;
        setSuperCounters(countersCopy);
      }
  }  
=======
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
>>>>>>> d6b99331d450b0493fc91251533ed551f85900df

  return (
    <div className="App">
      <header className="App-header">
        <h1>CountCorp</h1>
        <h4>You can count on us!</h4>
      </header>
      <section>
<<<<<<< HEAD
        <button onClick={ addNewCounter }>Create counter</button>
      </section>
      <section>
        {counters.map( (c, idx) => <Counter 
          count={c}
          onIncrease={() => increase(idx)}
          onDecrease={() => decrease(idx)}
        />)}
      </section>
      <section>
        {superCounters.map( (sc, scidx) => <SuperCounter 
          count={sc}
          onIncrease={() => {increaseSuper(scidx)}}
          onDecrease={() => {decreaseSuper(scidx)}}
=======
        <button onClick={ addCounter }>Create counter</button>
      </section>
      <section>
        {counters.map((c, idx) => <Counter
        count={c}
        onIncrease={() => increase(idx)}
>>>>>>> d6b99331d450b0493fc91251533ed551f85900df
        />)}
      </section>
    </div>
  );
}

export default App;
