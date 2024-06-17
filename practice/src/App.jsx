import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-xl font-bold underline w-200 h-100 bg-amber-200 md:bg-red-400 md:text-3xl lg:bg-lime-300 lg:text-4xl">
      Hello world!
    </h1>
    </>
  )
}

export default App
