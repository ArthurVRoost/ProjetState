import { useState } from "react";
import './App.css'
import Card from './Components/card/Card'
import Form from './Components/form/Form'
import Plan from "./Components/plan/Plan";
import Add from "./Components/add/Add";

function App() {


  return (
    <>
      <div className='divApp'>
        <div className='appCard'>
          <Card/>
        </div>
        <div className='appReste'>
          {/* <Form/> */}
          {/* <Plan/> */}
          <Add/>
        </div>

      </div>
      
    </>
  )
}

export default App
