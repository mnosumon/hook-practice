import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    let [count, setCount] = useState(0)
    let [count1, setCount1] = useState(0)
    useEffect(()=>{
        document.title = count
    },)
    useEffect(()=>{
        document.title = count1
    },[])
  return (
    <>
        <section style={{margin:"20px 0", backgroundColor: "#FFC300"}}>
            <div style={{padding: "10px 0"}}>
                <h1>Rendaring per click</h1>
                <h2>{count}</h2>
                <button onClick={(e)=>setCount(count+1)}>Click</button>
            </div>
            <div style={{padding: "10px 0"}}>
                <h1>Rendaring only first reload</h1>
                <h2>{count1}</h2>
                <button onClick={(e)=>setCount1(count1+2)}>Click</button>
            </div>
        </section>
    </>
  )
}

export default UseEffectHook