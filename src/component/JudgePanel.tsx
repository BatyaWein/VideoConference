import React from 'react'
import { observer } from 'mobx-react-lite'
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'
import { useMainStore } from '../context/Main'

const JudgePanel = observer(() => {
  const { participantStore: { judges } } = useMainStore()

  return (
    <Box sx={{ padding: 0.5, backgroundColor: '#f5f5f5', borderRadius: 1, height: "calc(55% - 8px)", mb: 2 }}>
      <Typography variant="h6">שופטים</Typography>
      <Grid container spacing={2} justifyItems='center' display='flex'>
        {judges.map((judge, index) => (
          <Card sx={{ maxWidth: '50%' }}>
            <CardMedia
              component="img"
              height="140"
              image={judge.image}
              alt={judge.name}
            />
            <CardContent sx={{ px: 2, py: 0 }}>
              <Typography variant="h6">{judge.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {judge.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  )
})

export default JudgePanel
