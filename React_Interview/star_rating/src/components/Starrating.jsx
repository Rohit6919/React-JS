import { useState } from "react"

export default function Starrating({StarCount = 5}){
   const [values,setvalues] = useState('')
   const [hover , sethover] = useState();   
  
   return <div>
    {new Array(StarCount).fill().map((_,index)=>{
        return <span key={index}
        className={(hover == 0 && index < values) || index < hover ? "gold" : ""}
        onClick={()=> setvalues(index+1)}
        onMouseEnter={()=>sethover(index+1)}
        onMouseLeave={()=>sethover(0)}
        >&#9733;</span>
    })}
    </div>
}