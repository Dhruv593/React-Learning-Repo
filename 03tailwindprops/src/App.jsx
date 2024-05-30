import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-black font-bold mb-7'>Hello !</h1>
      <Card productName = "Keyboard" btnText = "Buy Now"/>
      <br /><br />
      <Card productName = "MacKeyboard" btnText = "Buy Now" status = "Only 5 keyboard Available"/>
    </>
  )
}

export default App
