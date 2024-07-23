import React from 'react'
import { AppBar, Toolbar, Box, Button } from '@mui/material'

const BottomBar  = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit">שיחה</Button>
          <Button color="inherit">מיקרופון</Button>
          <Button color="inherit">הגדרות</Button>
        </Box>
        <Box>
          <Button color="inherit">LIVE</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default BottomBar
