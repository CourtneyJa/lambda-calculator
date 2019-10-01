import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [opsState]=useState(operators)
  return (
    <div className= 'ops-container'>
      {opsState.map((operator,index)=>{
        return <OperatorButton key={index} symbol= {operator.char} value={operator.value} displayCalc={props.displayCalc} setDisplayCalc={props.setDisplayCalc}/>
      })}
    </div>
  );
};

export default Operators;