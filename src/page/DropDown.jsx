import React, { useRef } from 'react'

const DropDown = () => {
    let drofRef = useRef(null)
    let HandleClick = (e) => {
        // if (drofRef.current.style.display == "none") {
        //     drofRef.current.style.display = "block"
        // }else{
        //     drofRef.current.style.display = "none"
        // }
        console.log(e.target);
    }
  return (
    <div onClick={HandleClick} ref={drofRef}>
        <button >Open</button>
        <ul >
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
    </div>
  )
}

export default DropDown