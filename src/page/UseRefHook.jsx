import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    let inputRef = useRef(null)
    let [input, setInput] = useState("")
    let handleInput = ()=>{
        setInput(inputRef.current.value);
        if (input === "") {
            inputRef.current.focus()
        }else{
            inputRef.current.style.color = "red"
        }
    }
    let handleChange = (e)=>{
        
    }
  return (
    <div>
        <div style={{padding: "20px 0", backgroundColor: '#E75E85'}}>
            <input onChange={handleChange} ref={inputRef} type="text" />
            <button onClick={handleInput}>Click</button>
            <h1>{input}</h1>
        </div>
    </div>
  )
}

export default UseRefHook