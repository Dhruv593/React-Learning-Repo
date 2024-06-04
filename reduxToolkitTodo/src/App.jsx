import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  

  return (
    <Provider store={store}>
      <h1 className='text-3xl'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
