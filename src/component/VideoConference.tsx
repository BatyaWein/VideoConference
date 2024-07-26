import React from 'react'
import { Stack } from '@mui/material'
import JudgePanel from './panels/JudgePanel'
import CaseParticipantPanel from './panels/CaseParticipantPanel'
import TopBar from './layout/TopBar'
import BottomBar from './layout/BottomBar'

const VideoConference = () => {
  return (
    <Stack height='100%' sx={{ bgcolor: 'primart.main' }}>
      <TopBar />
      <Stack display='flex' height='calc(100% - 56px)' sx={{ borderRadius: 2, bgcolor: 'primary.light' }}>
        <Stack height='100%' flexDirection='column' sx={{ padding: 3 }}>
          <JudgePanel />
          <CaseParticipantPanel />
        </Stack>
      </Stack>
      <BottomBar />
    </Stack>)
}

export default VideoConference
