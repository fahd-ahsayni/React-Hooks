import React from 'react'
import UseRef from './hooks/UseRef'
import UseState from './hooks/UseState'
import UseContext from './hooks/UseContext'
import UseEffect from './hooks/UseEffect'
import UseReducer from './hooks/UseReducer'


const App = () => {
  return (
    <div>
        <UseRef />
        <UseState />
        <UseContext />
        <UseEffect />
        <UseReducer />
    </div>
  )
}

export default App