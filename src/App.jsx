import React from 'react'
import DropDown from './page/DropDown'
import UseReducersHook from './page/UseReducersHook'
import UseEffectHook from './page/UseEffectHook'
import MultipleInput from './page/MultipleInput'
import Other from './page/Other'
import InputvalueRecieve from './components/InputvalueRecieve'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar'
import RoutLayout from './routlayout/RoutLayout'
import UseRefHook from './page/UseRefHook'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutLayout/>}>
        <Route path='/inputvluerecieve' element={<InputvalueRecieve/>}/>
        <Route path='/multipleInput' element={<MultipleInput/>}/>
        <Route path='/useEffectHook' element={<UseEffectHook/>}/>
        <Route path='/useReducersHook' element={<UseReducersHook/>}/>
        <Route path='/useRef' element={<UseRefHook/>}/>
        <Route path='/' element={<DropDown/>}/>
        <Route path='/other' element={<Other/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App