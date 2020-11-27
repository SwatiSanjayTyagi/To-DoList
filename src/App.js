import React , { Component } from 'react'
import './App.css'
import InputForm from '../src/Components/InputForm'

class App extends Component {
  constructor (props) {
    super(props)
    
  }

  

  render() {
    
    return (
      <div className='container'>
        <h1>My To Do List </h1>
        <InputForm />
      </div>
    )
  }
}

export default App