// import { useState } from 'react'
// import './App.css'

// const { useContext } = require("react");

// function App() {
//   const [isVisible, setIsVisible] = useState(true);
//      return (
//     <>
//      <div>
//      <button onClick={()=>setIsVisible(!isVisible)}>
//       {isVisible ? 'Hide' : 'Show'}
//      </button>
//       {isVisible && <h1>Visible</h1>}
//      </div>
//     </>
//   )
// }

// export default App

// import { useState } from "react";
// import { useEffect } from "react";
// import "./App.css";

// function App(){
//   const [data,setData]=useState(null)

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res)=>res.json())
//     .then((json)=>setData(json))
//   },[])

//   return (
//     <>
//     <div>{data ? <p>name :{data.name}</p> : "loading"}</div>
//     </>
//   )
// }

// export default App;

// import { useState } from "react";
// import { useEffect } from "react";
// import "./App.css";

// function App(){
//   const [count,setCount]=useState(0)

//   useEffect(()=>{
//     console.log("count change",count)
//   },[count])

//   return (
//     <>
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//     </>
//   )
// }

// export default App;


// useContext
// import { createContext, useContext } from "react";
// const username = createContext()
// function App (){
//   return (
//     <username.Provider value="Rohit">
//       <Child />
//       </username.Provider>
//   );
// }

// function Child(){
//   return <GrandChild />
// }

// function GrandChild(){
//   const usernamevalue = useContext(username)
//   return <h1>{usernamevalue}</h1>
// }

// export default App;

// // useContext darkmode 
// import { createContext, useContext } from "react";
// const theme = createContext()

// function App(){
//   return (
//     <theme.Provider value="dark">
//       <Child />
//     </theme.Provider>
//   )
// }
// function Child(){
//   const themename = useContext(theme)
//   return <p>current theme : {themename}</p>
// }

// export default App;


// useREF
// import { useRef } from "react";

// function App(){
//   const inputref = useRef(null)

// function focus(){
//   inputref.current.focus()
// }

//   return (
//     <>
//     <input type="text" ref={inputref} placeholder="enter your name " />
//     <button onClick={focus}>Focus</button>
//     </>
//   )
// }
// export default App;

// useReducer()
// import { useReducer } from "react";

// const intialState = 0;

// function reducer(state, action) {
//   if (action.type === "increment") return state + 1;
//   if (action.type === "decrement") return state - 1;
//   if (action.type === "reset") return intialState;
//   return state;
// }

// function Counter(){
//   const [count , dispatch] = useReducer(reducer,intialState)

//   return (
//     <div>
//       <p>count:{count} </p>
//       <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
//       <button onClick={()=>dispatch({type: "decrement"})}>Increment</button>
//       <button onClick={()=>dispatch({type: "reset"})}>Increment</button>
//     </div>
//   )
// }
// export default Counter;


// useMemo()
// import { useState, useMemo } from "react";

// function App() {
//   const [num, setNum] = useState(2);
//   const [count, setCount] = useState(0);

//   // ✅ useMemo will only recalculate when `num` changes
//   const squaredNum = useMemo(() => {
//     console.log("Calculating square...");
//     return num * num;
//   }, [num]);

//   return (
//     <div>
//       <h2>Number: {num}</h2>
//       <h2>Squared: {squaredNum}</h2>

//       <button onClick={() => setNum(num + 1)}>Increase Number</button>
//       <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
//     </div>
//   );
// }

// export default App;
