import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10);
  
  const addition = ()=> {
    count = count <20 ? count +1 : count ;
    setCount(count)
  };
  const deletion = ()=> { count = count >0 ? count -1 : count;
    setCount(count)
  }

  return (
    <>
    <h1>counter is {count}</h1>
    <button onClick={addition}>add</button>
    <button onClick={deletion}>remove</button>
    <h1>footer counter is {count}</h1>
    </>
  )
}

export default App
