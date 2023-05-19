// this component is to contain the counters

import React from "react";
import Counter from './Counter.js';

function CounterDisplay(props) {
    return (
      <div>
          <table>
            <tbody>
              <tr>
                {/* { props.counter.map((item, index) => <td key={index}><Counter counter={item}/></td>) } */}
                <td><Counter/></td>
                <td><Counter/></td>
                <td><Counter/></td>
                <td><Counter/></td>
              </tr>  
            </tbody>      
          </table>
      </div>
    );
  }
  
export default CounterDisplay;
