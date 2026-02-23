import React from 'react'
import './App.css'
import Card from './components/Card'
  import { useState, useEffect } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return(
    <>
    <div className="flex flex-wrap gap-6 justify-center">
      <Card  Ename="Aasif" role="Developer" About="Hi I'm a developer" image="https://i.pravatar.cc/150?img=15"/>
      <Card  Ename="Dan" role=" Senior Developer" About="Hi I'm a senior developer" image="https://i.pravatar.cc/150?img=35"/>
      <Card  Ename="Jam" role="Jr Developer" About="Hi I'm a jr developer" image="https://i.pravatar.cc/150?img=25"/>
      <Card  Ename="Jemmy" role="FrontEnd Developer" About="Hi I'm a frontend developer" image="https://i.pravatar.cc/150?img=5"/>
      <Card  Ename="Han"  About="Hi I'm a frontend developer" image="https://i.pravatar.cc/150?img=23"/>
    </div>
    </>
  )
}

export default App
