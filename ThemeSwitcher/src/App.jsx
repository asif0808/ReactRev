import { useEffect, useState } from "react"
import { ThemeContext, ThemeProvider } from "./context/theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"
function App() {
    const [themeMode,setThemeMode]=useState("light")
    const lightTheme=()=>{
      setThemeMode("light")
    }
    const darkTheme=()=>{
      setThemeMode("dark")
    }  
    // actual change
    useEffect(()=>{
      document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(themeMode)
     console.log("App theme:", themeMode)
    },[themeMode])

  return (
    
    <ThemeContext.Provider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-white">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
