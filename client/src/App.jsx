import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import School from '../src/components/kindegerten/primary';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Route path="/school" component={School} />
    <h1 className='bg-green-300'> React with Vite and tailwind</h1>
    </>
  )
}

export default App
