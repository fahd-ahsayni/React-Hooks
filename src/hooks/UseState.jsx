import React from 'react'
import '../style/home.css'

const { useState } = React

const Home = () => {
    const [Counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');

  return (
    <div className='hooks'>
    <h1 className='title'>useState</h1>
        <div className='main'>
            <p>{ Counter }</p>
            <button className='btn' onClick={() => setCounter(Counter + 1)}>+</button>
        </div>
        
        <div className='main main-2'>
            <p>{ `Hello , ${inputValue}` }</p>
            <input className='input' type="text" onChange={(e) => {setInputValue(e.target.value)}} />
        </div>
    </div>
  )
}

export default Home