import React from "react";

const OperatorButton = (props) => {
  function changeAmt(){
    if (props.symbol !== '='){
      return props.setDisplayCalc(props.displayCalc+props.value);
    }
    else {
      let answer = props.displayCalc;
      let answer2 = eval(answer);
      
      let answerString= answer2.toString();
      
      return props.setDisplayCalc(answerString);
    }
  }
  return (
    <button className= "ops-button" onClick={()=> changeAmt()}>{props.symbol}
    </button>
  );
};

export default OperatorButton