import React from 'react'
import DropDown from './page/DropDown'
import UseReducersHook from './page/UseReducersHook'
import UseEffectHook from './page/UseEffectHook'
import MultipleInput from './page/MultipleInput'

const App = () => {
  return (
    <>
      <MultipleInput/>
      <UseEffectHook/>
      <UseReducersHook/>
      <DropDown/>
    </>
  )
}

export default App