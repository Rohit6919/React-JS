import { useEffect, useState } from 'react'

function App() {
  return (
    <>
     <Counter/> 
    </>
  )
}

    function Counter(){
      const [count, setCount] = useState(0)

      // function increment(){
        
      // }
      useEffect(function(){
        setInterval(function(){
          setCount(count => count + 1)
        }, 1000)
      }, [])

      return <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
      </div>
    }
  


export default App
