// Component 1: App
//   The App component should contain the entire application.  
//     * It should have a button to create new counters.
//     * It shouold also have an area to display existing counters.
//     * When the page loads, it should have no counters on it.

// States - no counters / 1 counter / 2 counters 

// Need to store the state for the counters, superCounters, and SDCounters here

import './App.css';
import { useEffect, useState } from 'react';
import Counter from './Counter.js';
import SuperCounter from './SuperCounter.js';
import SuperDuperCounter from './SuperDuperCounter.js';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'teal'];
let colorChanger = 0;
let initialRender = true;

function App() {

  const [ counters, setCounters ] = useState([]);
  const [ superCounters, setSuperCounters ] = useState([]);
  const [ superDuperCounters, setSuperDuperCounters ] = useState([]);

  const [ countersTotal, setCountersTotal] = useState(0);
  const [ superCountersTotal, setSuperCountersTotal ] = useState(0);

useEffect (() => {
  if (initialRender) {
    initialRender = false;
  } else {

  
document.querySelector('.App-header').style = `background-color: ${colors[colorChanger]}`;
colorChanger++;
  }
console.log(colorChanger)
}, [counters, superDuperCounters])

  // const [ superDuperJimC, setSuperDuperJimC ] = useState(0);

  // let sDCCreated = false;

  // let keepCounting = true;
  
// Counter functions 

  function addNewCounter() {
    const newCounter = 0;
    if (superDuperCounters.length < 1) {
      // if (!sDCCreated) {
      if (superCounters.length < 2 ) {
        if (counters.length < 2 ) {
          setCounters([...counters, newCounter])
        } else {
          setCounters([]);
          addNewSuperCounter();
        }
      } else {
          setSuperCounters([]);
          addSuperDuperCounter();
      }
    }
  }

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
        updateSuperTotal(-1);
      }
  }

  // Super Counter functions
  function addNewSuperCounter() {
    const newSuperCounter = countersTotal;
    setCountersTotal(0);
    if (superCounters.length < 2 ) {
      setSuperCounters([...superCounters, newSuperCounter])
    }
  }

  function updateSuperTotal (amount) {
    setCountersTotal(countersTotal + amount);
    setSuperCountersTotal(superCountersTotal + amount);
  }

  function increaseSuper(idx) {
    const countersCopy = [...superCounters];
    countersCopy[idx] = countersCopy[idx] + 3;
    setSuperCounters(countersCopy);
    updateSuperDuperTotal(3);
  }

  function decreaseSuper(idx) {
      const countersCopy = [...superCounters];
      if ( countersCopy[idx] > 2 ) {
        countersCopy[idx] = countersCopy[idx] - 3;
        setSuperCounters(countersCopy);
        updateSuperDuperTotal(-3);
      } 
  }  
// Super Duper Counter functions
  function updateSuperDuperTotal (amount) {
    setSuperCountersTotal(superCountersTotal + amount);
  }

  function addSuperDuperCounter () {
    const newSuperDuperCounter = superCountersTotal;
    setSuperCountersTotal(0);
    if (superDuperCounters.length < 1){
      setSuperDuperCounters([...superDuperCounters, newSuperDuperCounter])
    }
  }

  function increaseSuperDuper(idx) {
    let numIterations = 0    
    let myInterval = setInterval(() => {    
      numIterations++;
      const countersCopy = [...superDuperCounters];
      countersCopy[idx] = countersCopy[idx] + numIterations;
      setSuperDuperCounters(countersCopy);
    }, 1000 );
    console.log(myInterval);
  }

  // function addSuperDuperCounter () {
  //   const newSuperDuperCounter = superCountersTotal;
  //   setSuperCountersTotal(0);
  //   if (!sDCCreated) {
  //     sDCCreated=true;
  //     document.getElementById('SDC').classList.remove('hide');
  //     setSuperDuperJimC(newSuperDuperCounter)
  //   }
  // }

  // let myInterval = 0;

  // function increaseSuperDuperJimC() {
  //   let numIterations = 0

  //   myInterval = 
  //   setInterval(() => {    
  //     numIterations++;
  //     let counterCopy = superDuperJimC;
  //     counterCopy = counterCopy + numIterations;
  //     setSuperDuperJimC(counterCopy);
  //   }, 1000 );
  //   console.log(myInterval);
  // }

  // function stopCounter() {
  //   clearInterval(myInterval);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CountCorp</h1>
        <h4>You can count on us!</h4>
      </header>
      <section>
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
        />)}
      </section>
      <section id='SDC' class='hide'></section>
      <section>  
      {superDuperCounters.map( (sdc, sdcidx) =><SuperDuperCounter 
          count={sdc}
          onStart={() => {increaseSuperDuper(sdcidx)}}
          />)}
        {/* <SuperDuperCounter count={superDuperJimC} onStart={increaseSuperDuperJimC} onStop={stopCounter}/>      */}
      </section>
    </div>
  );
}

export default App;
