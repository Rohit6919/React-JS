import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='bg-green-400 text-black p-4 rounded-4xl mb-4'>Tailwind Test</h1>
   <Card username="abc" btnTxt="Clicked Me"/>
   <Card username= "zyx" btnTxt="Hit me"/>
   </>
  )
}

export default App
