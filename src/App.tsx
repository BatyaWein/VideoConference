import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import TopBar from './component/TopBar'
import SideMenu from './component/SideMenu'
import BottomBar from './component/BottomBar'
import JudgePanel from './component/JudgePanel'
import ParticipantPanel from './component/ParticipantPanel'
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
