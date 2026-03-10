import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Moon,Sun } from 'lucide-react'
function App() {
  const[theme,setTheme]=useState("light")
  const ToggleTheme=()=>{
    const newTheme=theme==="light"?"dark":"light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark",newTheme==="dark")
  }
  return (
    <div className='h-full flex items-center justify-center flex-col gap-4 transition-all ease-in-out dark:bg-gray-700'>
   <button onClick={ToggleTheme}>{theme==="light"?<Moon/>:<Sun/>}</button>
   <div className='dark:text-white'>{theme==="light"?"Bright Mode Activated":"Welcome to Dark Mode"}</div>
    </div>
  )
}

export default App
