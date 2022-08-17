import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ButtonAnimation } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ButtonAnimation />
  )
}

export default App
