import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './UserContext'
import Navbar from './Navbar'
function App() {

      const user={
        name:"aasif",
        role:"Developer"
      };
  return (
    <UserContext.Provider value={user}>
      <h1>Hello World</h1>
      <Navbar/>
    </UserContext.Provider>
  )
}

export default App
