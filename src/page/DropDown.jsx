import React, { useRef, useState } from 'react'

const DropDown = () => {
    let drofRef = useRef(null)
    let inputRef = useRef(null)
    let [input, setInput] = useState("")
    let HandleClick = (e) => {
        if (drofRef.current.style.display == "none") {
            drofRef.current.style.display = "block"
        }else{
            if (!drofRef.current.contains(e.target)) {
                drofRef.current.style.display = "none"
            }
        }
    }
    let handleInput = ()=>{
        if (input === "") {
            inputRef.current.focus()
        }else{
            inputRef.current.style.color = "red"
        }
        
    }
    let handleChange = (e)=>{
        setInput(e.target.value);
    }
  return (
    <>
        <div onClick={HandleClick} style={{height: "300px", backgroundColor: 'gray'}}>
            <button  >Open</button>
            <ul ref={drofRef} style={{display: "none", backgroundColor: "red"}}>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repellat?</div>
        </div>
        <div style={{height: "50px", backgroundColor: 'orange'}}>
            <input onChange={handleChange} ref={inputRef} type="text" />
            <button onClick={handleInput}>Click</button>
            <h1>{input}</h1>
        </div>
    </>
  )
}

export default DropDown