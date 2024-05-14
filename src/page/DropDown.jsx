import React, { useRef, useState } from 'react'

const DropDown = () => {
    let drofRef = useRef(null)
    let HandleClick = (e) => {
        if (drofRef.current.style.display == "none") {
            drofRef.current.style.display = "block"
        }else{
            if (!drofRef.current.contains(e.target)) {
                drofRef.current.style.display = "none"
            }
        }
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
    </>
  )
}

export default DropDown