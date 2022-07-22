import { Card, CardContent, CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Caresafely() {
    return (
        
        <div style={{backgroundColor: '#f5f5f5', marginTop: '20px'}}>
            <Container maxWidth="lg" sx={{ p: 6 , backgroundColor: '#f5f5f5'}}>
            <Typography  component="div" sx={{ pb: 4, textAlign: 'center', fontSize: '2.2rem' }}>Return to Care Safely</Typography>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item sm={4} sx={{p:5}}>
                    <CardActionArea>
                        <Card sx={{ height: 220, p: 2 , textAlign: "center"}}>
                        <img src="/assets/info-circle-blue.svg" alt="information" height={125} width={125} />
                                
                            <CardContent sx={{ p: 2, textAlign: "center" }}>
                                <Typography variant="h5" component="div" sx={{ p: 2 }}>Vaccine Information</Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Grid>

                <Grid item sm={4} sx={{p:5}}>
                <CardActionArea>
                    <Card sx={{ height: 220, p: 2, textAlign: 'center' }}>
                    <img src='/assets/virus-blue.svg' alt='COVID' height={125} width={125} />
                            
                        <CardContent sx={{ p: 2, textAlign: "center" }}>
                            <Typography variant="h5" component="div" sx={{ p: 2 }}>Locations</Typography>
                        </CardContent>
                    </Card>
                    </CardActionArea>
                </Grid>
                <Grid item sm={4} sx={{p:5}}>
                <CardActionArea>
                    <Card sx={{ height: 220, p: 2, textAlign:"center" }}>
                    <img src='/assets/health-blue.svg' alt='COVID' height={125} width={125} />
                            
                        <CardContent sx={{ p: 2, textAlign: "center" }}>
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