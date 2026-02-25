import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const[password,setPassword]=useState("")
    const[length,setLength]=useState(8)
    const[charAllowed,setCharAllowed]=useState(false)
    const[NumAllowed,setNumAlllowed]=useState(false)
    const passwordRef=useRef(null)
    const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(NumAllowed){
        str+="0987654321"
      }
      if(charAllowed){
        str+="!@#$%^&*-_+=[]{}~`"
      }
      for (let i = 1; i <= length; i++) {
        
          let char = Math.floor(Math.random() * str.length + 1)
          pass+=str.charAt(char)
      }
      setPassword(pass)
    },[length,NumAllowed,charAllowed])
    const CopyPassToClip=useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,999);
      window.navigator.clipboard.writeText(password)
    },[password])
    function write(){
      const message=document.getElementById("message");
      message.innerText="copied";

    }
    const clicked=()=>{
      CopyPassToClip();
      write();
    }
    useEffect(()=>{
      passwordGenerator()
    },[length,NumAllowed,charAllowed])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-800 text-white-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"  className="outline-none w-full py-1 px-3 bg-white-500"
            placeholder="Password" value={password}/>
      <button onClick={clicked} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' id='message'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" value={length} min={8} max={50}  className='cursor pointer' onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length: {length}</label>
        </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{ setCharAllowed((prev)=>!prev)}}/>
        <label >Characters</label>
        </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={NumAllowed} onChange={()=>{ setNumAlllowed((prev)=>!prev)}}/>
        <label>Numbers</label>
        </div>
    </div>
    </div>
    </>
  )
}

export default App
