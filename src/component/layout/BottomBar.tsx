import React from 'react'
import { AppBar, Toolbar, Box, IconButton } from '@mui/material'
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import { observer } from 'mobx-react-lite'
import { useMainStore } from '../../context/Main'
import MicOffIcon from '@mui/icons-material/MicOff'
import MicIcon from '@mui/icons-material/Mic'

const BottomBar = observer(() => {
  const { user } = useMainStore()

  const onCamera = () => {
    if (user)
      user.isCamera = !user.isCamera
  }

  const onMute = () => {
    if (user)
      user.isMute = !user.isMute
  }

  const onShareScreen = () => {
    if (user)
      user.isShareScreen = !user.isShareScreen
  }



  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ m: 'auto' }}>
        <Box>
          <IconButton size='small' color="inherit" onClick={onCamera}>
            {user?.isCamera ? <VideocamOffIcon /> : <VideocamIcon />}
            {' '}
            מצלמה
          </IconButton>
          <IconButton size='small' color="inherit" onClick={onMute}>
            {user?.isMute ? <MicIcon color="secondary" /> : <MicOffIcon color="secondary" />}
            {' '}
            מיקרופון
          </IconButton>
          <IconButton size='small' color="inherit" onClick={onShareScreen}>
            {user?.isShareScreen ? <StopScreenShareIcon /> : <ScreenShareIcon />}
            {' '}
            שיתוף
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
})

export default BottomBar
