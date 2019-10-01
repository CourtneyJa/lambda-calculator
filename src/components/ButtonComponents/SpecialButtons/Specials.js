import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from "../../../data";


//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
    const [specState] = useState(specials)

  return (
    <div className="spec-container">
      {specState.map((special, index) =>{
        return <SpecialButton key={index} symbol = {special} displayCalc={props.displayCalc} setDisplayCalc = {props.setDisplayCalc}/>
      })}
    </div>
  );
};

export default Specials