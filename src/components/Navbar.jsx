import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <NavLink to='/'>DropDown</NavLink>
            <NavLink to='multipleInput'>MultipleInput</NavLink>
            <NavLink to='inputvluerecieve'>InputvalueRecieve</NavLink>
            <NavLink to='useEffectHook'>UseEffectHook</NavLink>
            <NavLink to='useReducersHook'>UseReducersHook</NavLink>
            <NavLink to='useRef'>useRef</NavLink>
            <NavLink to='other'>Other</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar