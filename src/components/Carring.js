import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
function Carring() {
  return (
    <Container maxWidth="lg" sx={{ p: 6, backgroundColor: '#f3f1e6' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h4" component="div" lineHeight={1.3} fontWeight={400} sx={{p:2}}>
            Caring for You & Others
          </Typography>
          <Typography component="div" fontSize={'16px'} lineHeight={1.75} sx={{p:2}}>
            The best way to protect yourself and your loved ones from COVID-19 is to get vaccinated and boosted when eligible, follow testing guidelines, wear a mask, wash your hands and practice physical distancing.
          </Typography>

          <Typography variant="h4" component="div" lineHeight={1.3} fontWeight={400} sx={{p:2}}>
            Safety Guidelines Update
          </Typography>
          <Typography component="div" fontSize={'16px'} lineHeight={1.75} sx={{p:2}}>
            <a href="/">Face masks are required to enter any of our care facilities and expected to be worn at all times,</a>
            even if you are fully vaccinated and boosted against COVID-19. We will provide a mask if needed.
          </Typography>
        </Grid>
        <Grid item sx={4}>
          <img src='https://www.hopkinsmedicine.org/sebin/p/i/masks.png' alt='masks' height={200} wight={200} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Carring;