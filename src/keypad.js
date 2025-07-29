import React from 'react'

function Keypad({handleClick,calculate,clear}){
  return (
    <div className='keypad'>
       <div className='row'>
       <button className='num' onClick={()=>{
             handleClick('7')
       }}>7</button>
       <button className='num' onClick={()=>{
        handleClick('8')
       }}>8</button>
       <button className='num' onClick={()=>{
        handleClick('9')
       }}>9</button>
       <button className='special' onClick={()=>{
        handleClick('/')
       }}>/</button>
       </div>
         <div className='row'>
       <button className='num' onClick={()=>{
        handleClick('4')
       }}>4</button>
       <button className='num' onClick={()=>{
        handleClick('5')
       }}>5</button>
       <button className='num' onClick={()=>{
        handleClick('6')
       }}>6</button>
       <button className='special' onClick={()=>{
        handleClick('*')
       }}>*</button>
       </div>
        <div className='row'>
       <button className='num' onClick={()=>{
         handleClick('1')
       }}>1</button>
       <button className='num' onClick={()=>{
        handleClick('2')
       }}>2</button>
       <button className='num' onClick={()=>{
        handleClick('3')
       }}>3</button>
       <button className='special' onClick={()=>{
        handleClick('-')
       }}>-</button>
       </div>
        <div className='row'>
       <button className='num' onClick={()=>{
        handleClick('0')
       }}>0</button>
       <button className='num' onClick={()=>{
           handleClick('.')
       }}>.</button>
       <button className='operator' onClick={()=>{
        clear('')
       }}>C</button>
       <button className='special' onClick={()=>{
        handleClick('+')
       }}>+</button>
       </div>
       <button className='equal' onClick={()=>{
        calculate('')
       }}>=</button>
    </div>
    
  )
}

export default Keypad;
