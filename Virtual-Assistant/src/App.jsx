import React from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { FaMicrophone } from "react-icons/fa";

function App(){
  return(
    <div className='main'>
      <img src={va} alt="" id="shfira"/>
      <span>I'm shfira, Your Advanced Virtual Assistant.</span>
      <button>Click Here<FaMicrophone /> </button>
    </div>
  )
}
export default App