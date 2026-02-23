import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let[count,setCount]=useState(0)
  function add() {
    if(count<20){
      setCount(count+1)
    }
    else
    alert('Limit Reached')
  }
   function sub() {
    if(count>-10){
      setCount(count-1)
    }
    else
    alert('Limit Reached')
  }
  const handleChange=(e)=>{
    const value=e.target.value
    if (value===""){
      setCount("")
      return;
    }
    const num=Number(value)
    setCount(num)

  }
  return (
    <>
    <div className="Outer">
      <h3>Counter Project</h3>
     
        <input type="number" className='box' value={count} onChange={handleChange} />
    
      <div className="box2">{count%2===0?"Even" : "Odd"}</div>
      <div className="btns">
       <button type="button" onClick={add} class="text-white bg-black box-border border border-black hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Increment</button>&nbsp;
       <button type="button" onClick={()=>{setCount(0)}} class="text-white bg-black box-border border border-black hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Reset</button>&nbsp;
              <button type="button" onClick={sub} class="text-white bg-black box-border border border-black hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App
