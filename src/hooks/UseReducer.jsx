import React from 'react'
import '../style/home.css'

const { useReducer } = React

const INC = 'increment'
const DEC = 'decrement'

const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return state + 1
        default:
            return state -1
    }
} 

const UseReducer = () => {
    const [count , dispatch] = useReducer(reducer , 0)
  return (
    <div className='hooks'>
        <h1 className='title'>useReducer</h1>
            <div className='main'>
            <p>{ count }</p>
            <button className='btn btn-inc' onClick={() => dispatch({type: INC})}>+</button>
            <button className='btn btn-dec' onClick={() => dispatch({type: DEC})}>-</button>
        </div>
    </div>
  )
}

export default UseReducer