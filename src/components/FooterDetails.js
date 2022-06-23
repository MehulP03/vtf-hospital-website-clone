import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function FooterDetails() {
    return (
        <div style={{backgroundColor:'#101d28'}}>
            <Container maxWidth="lg" sx={{ p: 6 }}>
                    <Button variant="contained" sx={{marginRight:2}}> Find Carrear Opportunities</Button>

                    <Button variant="contained" sx={{backgroundColor:'#528248'}}>Make a gift</Button>
                <br/>
                <Grid container spacing={2} sx={{marginTop: 4, p:3,  lineHeight:2.5}}>
                    <Grid Item xs={3} sx={{lineHeight:1.75}}>
                        <Typography component='div' sx={{ lineHeight:2.2   ,textSize: '1.21rem', color:'#FFFFFF' }}> Patients</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Centers & Depeartments</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Diseases & Conditions</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> International Patients</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Search Clinical Trials</Typography>
                    </Grid>
                    <Grid Item xs={3} sx={{lineHeight:1.75}}>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1.21rem', color:'#FFFFFF' }}> Students</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}>Training</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Student Portal</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}>Offices and Administrattion</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> About the Johns Hopkins School of Medicine</Typography>
                    </Grid>
                    <Grid Item xs={3} sx={{lineHeight:1.75}}>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1.21rem', color:'#FFFFFF' }}> Health Professionals</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Resources by Profession</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Refer a Patient</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Transfer a Patient</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Clinical Connection</Typography>
                    </Grid>
                    <Grid Item xs={3} sx={{lineHeight:1.75}}>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1.21rem', color:'#FFFFFF' }}> Researchers</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}>Find Research Topics</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}>Find Research Faculty </Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}>Find a Research Lab</Typography>
                        <Typography component='div' sx={{ lineHeight:2.2  , textSize: '1rem', color:'#6da5c5' }}> Advancements in Reasearch Articles</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FooterDetails