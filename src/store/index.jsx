import { createTheme, ThemeProvider } from '@mui/material/styles'
import {createContext,useState,useMemo} from 'react'

export const ColorModeContext = createContext({
    toggleMode : () => {},
    mode : "light",
})

export const ColorContextProvider = ({children}) =>{
const [mode,setMode] = useState("dark");


const colorMode = useMemo(
    ()=>({
    toggleMode : () => 
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
mode,
    }),
    [mode]
)


    const theme = createTheme({
        palette:{
            mode:mode
        }
    });

    return(
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </ColorModeContext.Provider>
    )
}