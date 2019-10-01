import React, {useState} from "react";
import NumberButton from './NumberButton';
import {numbers} from '../../../data';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  const[numbsState]=useState(numbers)
  // STEP 2 - add the imported data to state
  return (
    <div className="numbs-container">
      {numbsState.map((number, index)=>{
        return <NumberButton key={index} number={number} setDisplayCalc={props.setDisplayCalc} displayCalc={props.displayCalc}/>
      })}
    </div>
  );
};

export default Numbers