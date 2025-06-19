import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Nav () {
    return(
        <nav>
            <h1>LOGO</h1>
            <ul>
               <NavLink to="/"><li>HOME</li></NavLink>
               <NavLink to="/about"><li>ABOUT</li></NavLink>
               <NavLink to="/contact"><li>CONTACT</li></NavLink>
            </ul>
        </nav>
    )
     

}

export default Nav