import React from 'react'
import { Box, Stack } from '@mui/material'
import JudgePanel from './JudgePanel'
import ParticipantPanel from './ParticipantPanel'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

const VideoConference = () => {
  return (
    <Stack height='100%'>
      <TopBar />
      <Stack display='flex' height='calc(100% - 8px)'>
        {/* <SideMenu /> */}
        <Stack height='100%' flexDirection='column' sx={{ padding: 3 }}>
            <JudgePanel />
            <ParticipantPanel />
        </Stack>
      </Stack>
      <BottomBar />
    </Stack>)
}

export default VideoConference
