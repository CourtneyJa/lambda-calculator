import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";


//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [currOp] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className= "ops-div">{currOp.map((operator, index)=>(<OperatorButton key={index} operator={operator}/>))}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators