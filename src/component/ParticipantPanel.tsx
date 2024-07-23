import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'
import { useMainStore } from '../context/Main'

const ParticipantPanel = observer(() => {
  const { participantStore: { participants } } = useMainStore()

  return (
    <Box sx={{ padding: 0.5, backgroundColor: '#e0e0e0', borderRadius: 1, height:'calc(45% - 8px)' }}>
      <Typography variant="h6">משתתפים</Typography>
      <Grid container spacing={2}>
        {participants.map((participant, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={participant.image}
                alt={participant.name}
              />
              <CardContent>
                <Typography variant="h6">{participant.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {participant.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
})

export default ParticipantPanel
