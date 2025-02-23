import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const item = [
    {
      id:1,
      imageUrl:"https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcm91c2VsfGVufDB8fDB8fHww",
      title:"Item 1"
    },
    {
      id:2,
      imageUrl:"https://images.unsplash.com/photo-1601755486554-451db07cb308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcm91c2VsfGVufDB8fDB8fHww",
      title:"Item 2"
    },
    {
      id:3,
      imageUrl:"https://images.unsplash.com/photo-1598947720689-d7f934bde9e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNhcm91c2VsfGVufDB8fDB8fHww",
      title:"item 3"
    }
  ]
  const [images , setimages]=useState(0)

   
  function nextimage(){
    if(images === item.length-1){
      setimages(0);
    }else{
    setimages((images)=> images + 1)
  }
  }

  function previmage(){
    if(images === 0){
      setimages(0);
    }else{
    setimages((images)=> images - 1)
  }
  }
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      nextimage()
    },1000)

    return()=> clearInterval(interval)
  },[images])

  return (
   <div>
    <img
    src={item[images].imageUrl}
    alt={item[0].title}
    width={300}
    height={300}
    />
    <h1>{item[images].title}</h1>
    <button onClick={previmage}>prev</button>
    <button onClick={nextimage}>next</button>
   </div>
  )
}

export default App
