import React from 'react'
import DropDown from './page/DropDown'
import UseReducersHook from './page/UseReducersHook'
import UseEffectHook from './page/UseEffectHook'
import MultipleInput from './page/MultipleInput'
import Other from './page/Other'

const App = () => {
  return (
    <>
    <Other/>
      <MultipleInput/>
      <UseEffectHook/>
      <UseReducersHook/>
      <DropDown/>
    </>
  )
}

export default App