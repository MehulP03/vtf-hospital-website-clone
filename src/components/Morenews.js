import {Button, Container, Typography, Grid } from '@mui/material'
import React from 'react'

function Morenews() {
    return (
        <Container maxWidth='lg' sx={{ p:8, textAlign: 'center' }}>

            <Typography component="div" sx={{ pb: 4, fontSize: '2.2rem' }}>More News</Typography>
            <Grid container spacing={2} sx={{alignItems: 'center'}}>
                <Grid item xs={6}>
                    <div style={{padding: 2}}>
                        <Button >News & Publication</Button><br/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{padding: 2}}>
                        <Button>News & Publication</Button><br/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{padding: 2}}>
                        <Button>News & Publication</Button><br/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{padding: 2}}>
                        <Button>News & Publication</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Morenews