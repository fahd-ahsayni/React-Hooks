import React from 'react'
import { authContext } from '../App'

const { useContext } = React

const Card = () => {
    const context = useContext(authContext)
  return (
    <div className='card'>
        <p className='context'>{context.Component}</p>
    </div>
  )
}

export default Card