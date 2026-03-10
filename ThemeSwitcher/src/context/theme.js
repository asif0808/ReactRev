import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})
export const ThemeProvider=ThemeContext.Provider
// use below if dont want to use useContext again and again
export default function useTheme(){
    return useContext(ThemeContext)
}
