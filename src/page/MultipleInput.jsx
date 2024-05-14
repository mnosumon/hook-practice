import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputValue } from '../slice/inputReciever' 

const MultipleInput = () => {
  // const nameRef = useRef(null)
  // const emailRef = useRef(null)
  // const passwordRef = useRef(null)

  const dispatch = useDispatch()

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    dispatch(inputValue(values)) 
    // nameRef.current.innerText = `Name: ${values.name}`
  }

  return (
    <section style={{ marginBottom: "20px", marginTop: "20px", backgroundColor: "#64FF33" }}>
      <h2>Input Form</h2>
      <div style={{ display: "flex", flexDirection: "column", width: "200px", gap: "5px" }}>
        <input type="text" name='name' onChange={handleChange} />
        <input type="email" name='email' onChange={handleChange} />
        <input type="password" name='password' onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>Submit</button> 
      </div>
      <div>
        {/* <h3 ref={nameRef}>Name: {values.name}</h3> 
        <h3 ref={emailRef}>Email: {values.email}</h3>
        <h3 ref={passwordRef}>Password: {values.password}</h3> */}
      </div>
    </section>
  )
}

export default MultipleInput
