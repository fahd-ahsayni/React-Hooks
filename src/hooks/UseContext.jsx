import React from 'react'
import { authContext } from '../App';
import Card from './Card';
const { useContext } = React

const UseContext = () => {
const context = useContext(authContext);

  return (
    <div className='hooks'>
        <h1 className='title'>{context.hooks.Context}</h1>
        <div className='main'>
            <Card />
        </div>
    </div>
  )
}

export default UseContext