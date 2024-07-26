import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './style/theme'
import MainStoreProvider from './context/Main'
import VideoConference from './component/VideoConference'

const App = () => {
  return (
    <MainStoreProvider>
      <ThemeProvider theme={theme}>
        <VideoConference/>
      </ThemeProvider>
    </MainStoreProvider>
  )
}

export default App
