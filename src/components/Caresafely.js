import { Card, CardContent, CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Caresafely() {
    return (
        
        <div style={{backgroundColor: '#f5f5f5'}}>
            <Container maxWidth="lg" sx={{ p: 6 , backgroundColor: '#f5f5f5'}}>
            <Typography  component="div" sx={{ pb: 4, textAlign: 'center', fontSize: '2.2rem' }}>Return to Care Safely</Typography>
            <Grid container spacing={3} sx={{ alignItems: 'center', px: 2 }}>
                <Grid item xs={4}>
                    <CardActionArea>
                        <Card sx={{ height: 200, p: 2 }}>

                            <CardContent sx={{ p: 2, textAlign: "center" }}>
                                <img src="https://www.hopkinsmedicine.org/_images/_svg/info-circle-blue.svg" alt="information" height={125} width={125} />
                                <Typography variant="h5" component="div" sx={{ p: 2 }}>Vaccine Information</Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>

                <Grid item xs={4}>
                <CardActionArea>
                    <Card sx={{ height: 200, p: 2 }}>
                        <CardContent sx={{ p: 2, textAlign: "center" }}>
                            <img src='https://www.hopkinsmedicine.org/_images/_svg/virus-blue.svg' alt='COVID' height={125} width={125} />
                            <Typography variant="h5" component="div" sx={{ p: 2 }}>Locations</Typography>
                        </CardContent>
                    </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={4}>
                <CardActionArea>
                    <Card sx={{ height: '200px', p: 2 }}>
                        <CardContent sx={{ p: 2, textAlign: "center" }}>
                            <img src='https://www.hopkinsmedicine.org/_images/_svg/health-blue.svg' alt='COVID' height={125} width={125} />
                            <Typography variant="h5" component="div" sx={{ p: 2 }}>Appoinments</Typography>
                        </CardContent>
                    </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Container >
        </div>
    )
}

export default Caresafely