import { useState } from "react";
import './App.css'
import Card from './Components/card/Card'
import Form from './Components/form/Form'

function App() {


  return (
    <>
      <div className='divApp'>
        <div className='appCard'>
          <Card/>
        </div>
        <div className='appReste'>
          <Form/>
        </div>

      </div>
      
    </>
  )
}

export default App
