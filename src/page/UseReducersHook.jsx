import React, { useReducer } from 'react'

let initialState = {
  count: 0
}
function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return {count: state.count++}
    case "minus":
      if (state.count > 0) {
        return {count: state.count--}
      }
    default:
      return state
  }
}

const UseReducersHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div style={{marginBottom: "20px", backgroundColor: "#FF5733"}}>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type: "plus"})}>Plus</button>
        <button onClick={()=>dispatch({type: "minus"})}>Minus</button>
      </div>
    </>
  )
}

export default UseReducersHook