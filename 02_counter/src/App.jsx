import { useState } from 'react'
import './App.css'

function App() {

 let [Counter , setCounter]= useState(15);

  let addvalue =()=>{
    if (Counter < 20){ 
    setCounter(Counter + 1)
    console.log("counter",Counter + 1);
    }else{
      console.log("counter can not ve greater than 20")
    }
  }
  let removevalue =()=>{
    if (Counter > 0){ 
      setCounter(Counter - 1)
      console.log("counter",Counter - 1);
      }else{
        console.log("it can not be more than 0")
      }

}



  return (
    <>
      <h1>chai aur react </h1>
      <h3>counter value: {Counter}</h3>

      <button
      onClick={addvalue}>add value</button> 
      <br />
      <button
      onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
