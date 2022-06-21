import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Features() {
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid>
                    <Card sx={{ maxWidth: 250  }}>
                        <CardContent sx={{ padding: '20'}} >
                            <Typography variant="h3" component="div">Doctors</Typography>
                            <Typography varient="body2" component="div">Search for doctors by name, specialty or location.</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid>
                    <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
                        <CardContent sx={{ padding: '20'}}>
                            <Typography variant="h3" component="div">Doctors</Typography>
                            <Typography varient="body2" component="div">Search for doctors by name, specialty or location.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardContent sx={{ padding: '20'}}>
                            <Typography variant="h3" component="div">Doctors</Typography>
                            <Typography varient="body2" component="div">Search for doctors by name, specialty or location.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardContent sx={{ padding: '20'}}>
                            <Typography variant="h3" component="div">Doctors</Typography>
                            <Typography varient="body2" component="div">Search for doctors by name, specialty or location.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Features