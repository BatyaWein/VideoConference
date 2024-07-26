import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Grid } from '@mui/material'
import { useMainStore } from '../../context/Main'
import ParticipantCard from '../ParticipantCard'

const JudgePanel = observer(() => {
  const { participantStore: { judges } } = useMainStore()

  return (
    <Box sx={{ height: "calc(55% - 24px)", mb: 2 }}>
      <Grid height='100%' justifyContent='center' display='flex'>
        {judges.map((judge) => (
          <ParticipantCard participant={judge} key={judge.id} sx={{maxWidth:'50%'}} />
        ))}
      </Grid>
    </Box>
  )
})

export default JudgePanel
