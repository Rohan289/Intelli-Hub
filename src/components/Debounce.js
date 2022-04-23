import React, { useState, useCallback } from "react";

function Debounce () {
  const [val, setVal] = React.useState("");

  const debounce = (fn) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), 5000);
    }
  };


const handleChange = (value) => {
    //API CALL FOR DEBOUNCE
    console.log("Enter", value);
  };
  const debouncedHandler =  React.useCallback(debounce(handleChange), []);

  const optimizeChange = (val) => {
      setVal(val);
      debouncedHandler(val);
  }
  return (
    <>
      <input value={val} name={val} onChange={(e) =>  optimizeChange(e.target.value)} type="text"/>
    </>
  );
};
export default Debounce;
