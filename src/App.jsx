import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Component/Nav'
import useLocalStorage from 'use-local-storage'
import Card from './Component/card'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Paper } from '@material-ui/core'
import blue from '@mui/material/colors/blue';
import { ColorContextProvider } from './store'
import { ColorModeContext } from './store'
import {Box} from '@mui/system'

function App() {

  // const theme = createTheme({
  //   palette: {
  //    type:"dark"
  //   },
  // });
 
  return (
<>

{/* <ThemeProvider them
e={theme}> */}

<Box sx={{
  height : "250vh",
  bgColor:'background.default',
  color:"text.primary",
  width:"100%"
}}
>

<Navbar />
   <Card/>
</Box>
  
   {/* </ThemeProvider> */}

   </>
  )
}

export default App
