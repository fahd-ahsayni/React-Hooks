import React from 'react'

const {useEffect, useState} = React

const UseEffect = () => {
    const [Counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
       setMessage(`useEffect run ${Counter}`)
    }, [Counter]);
    
  return (
    <div className='hooks'>
        <h1 className='title'>useEffect</h1>
        <div className='main'>
            <p className='text-2xl text-amber-400'>{message}</p>
            <button onClick={() => setCounter(Counter+1)} className='btn'>Run</button>
        </div>
    </div>
  )
}

export default UseEffect