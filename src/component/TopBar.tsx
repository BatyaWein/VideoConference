import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

const TopBar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    משרד המשפטים, ועדת ערר לפיצויים ולהיטל השבחה
                </Typography>
                <Box>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
