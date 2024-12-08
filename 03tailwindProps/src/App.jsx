import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="bg-teal-600 text-white">Tailwind</button>
      <Card username = "Rie"/>
      <Card username = "Tithi"/>

    </>
  )
}

export default App
