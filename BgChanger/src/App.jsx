import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
    const [color,setColor]=useState("black")
  return (
    <div style={{backgroundColor: color,width:'100%',height:'100vh'}}>
           <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-500"
          >Red</button>
          <button onClick={()=>{setColor("green")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-500"
          >Green</button>
          <button onClick={()=>{setColor("blue")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-500"
          >Blue</button>
           <button onClick={()=>{setColor("orange")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-orange-500"
          >Orange</button>
           <button onClick={()=>{setColor("yellow")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-500"
          >Yellow</button>
           <button onClick={()=>{setColor("purple")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-purple-500"
          >Purple</button>
    </div>
   </div>  
   </div>
  )
}

export default App
