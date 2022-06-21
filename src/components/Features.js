import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Features() {
    return (
        <Container  maxWidth="lg" sx={{p:6}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 250, p:2  }}>
                        <CardContent sx={{ p:2 , textAlign: "center"}} >
                            <Typography variant="h4" component="div" sx={{p:2}}>Doctors</Typography>
                            <Typography varient="body2" component="div">Search for doctors by name, specialty or location.</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 250, p:2 }}>
                        <CardContent sx={{p:2, textAlign: "center"}}>
                            <Typography variant="h4" component="div">Locations</Typography>
                            <Typography varient="body2" component="div">Find care in an area convinent to you</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 250, p:2 }}>
                        <CardContent sx={{ p:2, textAlign: "center" }}>
                            <Typography variant="h4" component="div">Appoinments</Typography>
                            <Typography varient="body2" component="div">Schedule an appointment online.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}   >
                    <Card sx={{ maxWidth: 250, p:2 }}>
                        <CardContent sx={{ p:2, textAlign: "center"}}>
                            <Typography variant="h4" component="div" >MyChart</Typography>
                            <Typography varient="body2" component="div">View test results, schedule most appointments and more.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Features