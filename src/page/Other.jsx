import React, { useState, useRef, useEffect } from "react";

export default function Other() {
  let myRef = useRef();


  let click = () => {
    console.log(myRef.current.innerHTML);
  };

  return (
    <div className="App">
      <h1 ref={myRef}>Hello CodeSandbox</h1>
      <button onClick={click}>CLICK!</button>
    </div>
  );
}
