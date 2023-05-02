import { createContext } from "react"

export const Theme = {
    light : {
        backgroundColor : "#ffffff",
        color : "black",
        border : "1px solid black"
    },
    dark : {
        backgroundColor : "#000000",
        color : "white",
        border : "1px solid white"
    }
}

export const ThemeContext = createContext(Theme.light)