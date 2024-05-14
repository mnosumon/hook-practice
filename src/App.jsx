import React from 'react'
import DropDown from './page/DropDown'
import UseReducersHook from './page/UseReducersHook'
import UseEffectHook from './page/UseEffectHook'
import MultipleInput from './page/MultipleInput'
import Other from './page/Other'
import InputvalueRecieve from './components/InputvalueRecieve'

const App = () => {
  return (
    <>
    <Other/>
      <MultipleInput/>
      <UseEffectHook/>
      <UseReducersHook/>
      <DropDown/>
      <InputvalueRecieve/>
    </>
  )
}

export default App