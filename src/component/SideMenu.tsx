import React from 'react'
import { Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import InfoIcon from '@mui/icons-material/Info'

const SideMenu = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Box sx={{ width: 240, display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#2c2c2c', color: '#fff' }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">תפריט</Typography>
        </Box>
        <List>
          <ListItem button>
            <HomeIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="דף הבית" />
          </ListItem>
          <ListItem button>
            <SettingsIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="הגדרות" />
          </ListItem>
          <ListItem button>
            <InfoIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="מידע" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default SideMenu
