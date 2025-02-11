import { useState } from 'react';

function App() {
  const [Color, setColor] = useState('olive');

  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: Color, height: '100vh', width: '100vw' }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white rounded-5xl'>
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 rounded-2xl'
          style={{backgroundColor:"red"}}> RED </button>

          <button
          onClick={()=>setColor("green")} 
          className='outline-none px-4 rounded-2xl'
          style={{backgroundColor:"green"}}> green </button>
          

          <button
          onClick={()=>setColor("purple")}
          className='outline-none px-4 rounded-2xl'
          style={{backgroundColor:"purple"}}> purple </button>


          <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4 rounded-2xl'
          style={{backgroundColor:"blue"}}> blue </button>
        </div>
      </div>
    </div>
  );
}

export default App;
