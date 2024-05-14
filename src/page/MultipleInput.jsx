import React, { useRef, useState } from 'react'

const MultipleInput = () => {

  let nameRef = useRef(null)
  let emailRef = useRef(null)
  let passwordRef = useRef(null)
  

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
  let handleSubmit = ()=>{
    nameRef.current.innerText = `Name: ${recieve.name}`
    emailRef.current.innerText = `Email: ${recieve.email}`
    passwordRef.current.innerText = `password: ${recieve.password}`
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
          <h3 ref={nameRef}>Name: </h3>
          <h3 ref={emailRef}>Email: </h3>
          <h3 ref={passwordRef}>Password: </h3>
        </div>
        
    </section>
  )
}

export default MultipleInput