import React, { useState } from 'react'

const { useRef } = React

const UseRef = () => {
  const inputRef = useRef(null)
  const [message, isMessage] = useState('');
  
  const setMessage = () => {
    isMessage(`hello ${inputRef.current.value}`)
  }
  return (
    <div className='hooks'>
        <h1 className='title'>useRef</h1>
        <div className='main'>
          <p className='text-3xl text-pink-400'>{message}</p>
            <input ref={inputRef} className='input' type="text" />
            <button className='btn btn-inc bg-pink-600' onClick={setMessage}>Click</button>
        </div>
    </div>
  )
}

export default UseRef