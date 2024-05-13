import React from 'react'
import DropDown from './page/DropDown'
import UseReducersHook from './page/UseReducersHook'
import UseEffectHook from './page/UseEffectHook'

const App = () => {
  return (
    <>
      <UseEffectHook/>
      <UseReducersHook/>
      <DropDown/>
    </>
  )
}

export default App