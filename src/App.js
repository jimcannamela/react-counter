// Component 1: App
//   The App component should contain the entire application.  
//     * It should have a button to create new counters.
//     * It shouold also have an area to display existing counters.
//     * When the page loads, it should have no counters on it.

// States - no counters / 1 counter / 2 counters 

// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay.js';
import Counter from './Counter.js';

function App() {

const [counter, setCounter] = useState(0);

// need to handle create counter click
const handleCreateCounterClick = (e) => {
  console.log('button clicked')
  // this needs to add a counter to the page!
  console.log(setCounter);
  console.log(counter);
  setCounter(<Counter counter={counter} />)
}


// // need to modify content of counter value

// // need to handle plus button click
// const handlePlusClick = (e) => {
//   setCounter
// }

// // need to handle minus button click
// const handleMinusClick = (e) => {
//   setCounter
// }



  return (
    <div className="App">
      <header className="App-header">
        <h1>CountCorp</h1>
        <h4>You can count on us!</h4>
      </header>
      <section>
        <button onClick={ handleCreateCounterClick }>Create counter</button>
      </section>
      <section>
        <CounterDisplay />
      </section>
    </div>
  );
}

export default App;
