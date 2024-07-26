import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(21, 35, 45)',
      light: 'rgb(53, 69, 78)'
    },
    secondary: {
      main: 'rgb(255, 255, 255)'
    },
    text: {
      primary: 'rgb(73, 151, 218)',
      secondary: 'rgb(255, 255, 255)',
    }
  },
})

export default theme
