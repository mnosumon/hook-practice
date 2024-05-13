import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    let [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = count
    },)
  return (
    <>
        <section style={{margin:"20px 0", backgroundColor: "#FFC300"}}>
            <h2>{count}</h2>
            <button onClick={(e)=>setCount(count+1)}>Click</button>
        </section>
    </>
  )
}

export default UseEffectHook