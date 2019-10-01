import React from "react";

const NumberButton = (props) => {
  function changeVal(){
    if (props.displayCalc !=='0')
      return props.setDisplayCalc(props.displayCalc+props.number);
    else
      return props.setDisplayCalc(props.number);

  }
  if (props.number !=='0'){
    return(
      <button className= "numbs-button" onClick={()=>changeVal()}>{props.number}</button>
    );
  }
  else {
    return (
      <button className="numbs-button zero-button" onClick={()=> changeVal()}>{props.number}
      </button>
    );
  }
};

export default NumberButton;