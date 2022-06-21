import { AppBar, Container, Typography } from '@mui/material'
import React from 'react'


function Navbar() {
  return (
        <AppBar position="static">
            <Container maxWidth='xl' sx={{display: 'flex', p:1}}>
                <div>
                <img src='../assets/logo.png' alt='logo' height={80} width={100}/>
                </div>
                <Typography variant="h5" component='div' sx={{p:2}}>
                MyHealthCareGroup
                </Typography>

            </Container>
        </AppBar>
  )
}

export default Navbar