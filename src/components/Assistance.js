import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Assistance() {
  return (
    <Container maxWidth="lg" sx={{p:6}}>
        <Grid container spacing={2}>
        <Grid item sm={6}>
            <Typography variant="h3" component="div">
                Payments and Billing Assistance
            </Typography>
            <ul>
                <li><Typography variant="body1" component="div"><a href="/"> Estimate Your Bill </a>: Create an online estimate for the hospital fee portion of your care.</Typography></li>
                <li><Typography variant="body1" component="div"><a href="/"> Pay Your Bill </a>:  Pay your bill online or by phone. Contact us with questions.</Typography></li>
                <li><Typography variant="body1" component="div"><a href="/"> Financial Assistance </a>: Explore ways to get help paying your medical bills. Learn about payment plans.</Typography></li>
                <li><Typography variant="body1" component="div"><a href="/"> No Surprises Act </a>: Learn about a new right you have as a patient.</Typography></li>
            </ul>
        </Grid>
        <Grid item sm={6}>
            <img src='../assets/billing-hero.jpg' alt="billing hero " 
            style={{height: "100%", width: "100%", paddingLeft: 10}}/>
        </Grid>

        </Grid>
    </Container>
  )
}

export default Assistance