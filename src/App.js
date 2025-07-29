import React, { useState } from 'react'
import Keypad from './keypad'
import './App.css';
const App = () => {

     const [update,setUpdate] = useState(" ")
       function handleClick(e){
               setUpdate(update+e)
       }
       function calculate(value){
          let output = eval(update)
          setUpdate(output)
       }
       function clear(){
        setUpdate('')
       }
  return (
    <div className='container'>
      <h1 className='head'>Calculator-App using ReactJs</h1>
      <div className='calculator'>
        <input type='text' value={update} className='output' ></input>
        <Keypad handleClick = {handleClick} calculate ={calculate} clear = {clear} ></Keypad>
      </div>
    </div>
  )
}

export default App