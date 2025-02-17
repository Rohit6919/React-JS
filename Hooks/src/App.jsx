
// USE CASE 1: Focus on input field on button click

// import { useState,useRef } from 'react'
// import './App.css'

// function App() {
//   const Inputref = useRef()
   
//   function focusOnInput(){
//     Inputref.current.focus()
//   }
//   return (
//     <>
//     <h1>SIGN-UP</h1>
//     <div style={{width: "100px", margin: "auto"}}>
//     <input ref={Inputref} type={'text'} placeholder='Enter your name' />
//     <input type={'text'} placeholder='Enter Your City' />
//     </div>
//     <button onClick={focusOnInput}>Submit</button>
//     </>
//   )
// }

// export default App



//  USE CASE 2: Create a timer that starts on button click and stops on another button click
// better code
// ugly code

import { useState,useRef } from 'react'

function App() {
  const [timer,setTimer] = useState(0)
  const intervalRef = useRef()

  const start = () => {
    if(intervalRef.current !== null) return
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1)
    },1000)
  }

  const pause = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null;
  }

  return( 
  <>
  <h1>TIMER:{timer}</h1>
  <button onClick={start}>Start</button>
  <button onClick={pause}>Pause</button>
  </>
  )
}

export default App