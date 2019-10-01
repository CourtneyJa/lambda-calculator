import React from "react";

const SpecialButton = (props) => {
  function changeAmt(){
    if (props.symbol ==='C') return props.setDisplayCalc(0)
    if (props.symbol ==='+/-' && props.setDisplayCalc[0] !=='-') return props.setDisplayCalc('-'+props.displayCalc)
    if (props.symbol ==='+/-' && props.setDisplayCalc[0] ==='-') return props.setDisplayCalc(props.displayCalc.slice(1,props.displayCalc.length))
    if (props.symbol ==='%' && props.setDisplayCalc){return props.setDisplayCalc(props.displayCalc/100)} 
  }
  return (
    <button className = "specials-button" onClick ={()=> changeAmt()}>{props.symbol}     
    </button>
  );
};

export default SpecialButton