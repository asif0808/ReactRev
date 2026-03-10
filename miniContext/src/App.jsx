import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  const [user,setUser]=useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
    <h1>Hello</h1>
    <Login/>
    <Profile/>
    </UserContext.Provider >
  )
}

export default App
