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

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

const UseReducersHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const [todos, dispatch] = useReducer(reducer, initialTodos);

  // const handleComplete = (todo) => {
  //   dispatch({ type: "COMPLETE", id: todo.id });
    
  // }
  return (
    <>
      <div style={{marginBottom: "20px", backgroundColor: "#FF5733"}}>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type: "plus"})}>Plus</button>
        <button onClick={()=>dispatch({type: "minus"})}>Minus</button>
      </div>

      {/* <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </> */}
    </>
  )
}

export default UseReducersHook