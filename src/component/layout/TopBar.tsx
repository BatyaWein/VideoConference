import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Stack } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useMainStore } from '../../context/Main'

const TopBar = () => {
    const { meeting } = useMainStore()
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Stack flex={1}>
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        משרד המשפטים,{'   '}
                        {meeting.name}{' - '}
                        {meeting.description}
                    </Typography>
                    <Typography variant='body2'>
                        תיק מספר{'   '}
                        {meeting.caseNumber}
                    </Typography>
                </Stack>
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
