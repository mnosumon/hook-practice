import React, { useState } from 'react'

const MultipleInput = () => {
  let [recieve, setRecieve] = useState({
    name: " ",
    email: " ",
    password: " "
  })

  let handleChange = (e)=>{
    let {name, value} = e.target
    setRecieve((prev)=>({
      ...prev,
      [name]: value
    }))
  }
console.log(recieve);
  let handleSubmit = ()=>{

  }
  return (

    <section style={{marginBottom: "20px", marginTop: "20px", backgroundColor: "#64FF33"}}>
        <h2>hello</h2>
        <div style={{display:"flex", flexDirection: "column", width: "200px", gap:"5px"}}>
          <input type="text" name='name' onChange={handleChange} />
          <input type="email" name='email' onChange={handleChange} />
          <input type="password" name='password' onChange={handleChange} />
          <input type="submit" placeholder='Submit' onClick={handleSubmit}/>
        </div>
        <div>
          <h3>{recieve.name}</h3>
          <h3>{recieve.email}</h3>
          <h3>{recieve.password}</h3>
        </div>
        
    </section>
  )
}

export default MultipleInput