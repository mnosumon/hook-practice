import React from 'react'
import { useSelector } from 'react-redux'

const InputvalueRecieve = () => {
  const valueRecive = useSelector((state) => state.inputt.value)
  console.log(valueRecive);
  return (
    <>
        <section style={{margin:"20px 0", backgroundColor: "#C70039"}}>
            <h3>Name: {valueRecive.name}</h3>
            <h3>email: {valueRecive.email}</h3>
            <h3>Password: {valueRecive.password}</h3>
        </section>
    </>
  )
}

export default InputvalueRecieve