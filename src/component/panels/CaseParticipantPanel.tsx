import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Grid } from '@mui/material'
import { useMainStore } from '../../context/Main'
import ParticipantCard from '../ParticipantCard'

const CaseParticipantPanel = observer(() => {
  const { participantStore: { participants } } = useMainStore()

  return (
    <Box sx={{ height: 'calc(45% - 24px)' }}>
      <Grid height='100%' justifyContent='center' display='flex'>
        {participants.map((participant) => (
          <ParticipantCard participant={participant} key={participant.id} sx={{ maxWidth: '35%' }} />
        ))}
      </Grid>
    </Box>
  )
})

export default CaseParticipantPanel
