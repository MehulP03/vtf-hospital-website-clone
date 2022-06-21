import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'

import React from 'react'

function Featurestories() {
    return (
        <Container maxWidth="lg" sx={{ p: 6, }}>
            <Typography component="div" sx={{ pb: 4, textAlign: 'center', fontSize: '2.2rem' }}>Featured Stories</Typography>
            <hr style={{ marginLeft: '45%', marginRight: '45%', color: 'yellow' }} />
            <Grid container spacing={3} sx={{ alignItems: 'center', px: 2 }}>
                <Grid item xs={4}>
                    <Card sx={{height: 400, border: 'none'}}>
                        <CardMedia
                            component='img'
                            image='https://www.hopkinsmedicine.org/_includes/_images/whole-grains.jpg'
                            alt="whloe grains"
                        />
                        <CardContent sx={{ p: 2 }}>
                            <Typography variant="h5" component="div" sx={{ textAlign: "left" }}>9 Whole Grains to Try </Typography>
                            <Typography component="div" sx={{ textAlign: "left", fontSize: '16px' }}>A registered dietitian explains the <a href="/"> benefits of eating whole grains </a>and provides tips on introducing them into your diet. </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{height: 400}}>
                        <CardMedia
                            component='img'
                            image='https://www.hopkinsmedicine.org/_includes/_images/menopause-letter-blocks.png'
                            alt="menopause letter blocks"
                        />
                        <CardContent sx={{ p: 2, textAlign: "center" }}>

                            <Typography variant="h5" component="div" sx={{ textAlign: "left" }}>Menopause Management During Breast Cancer Treatment  </Typography>
                            <Typography component="div" sx={{ textAlign: "left", fontSize: '16px' }}>An expert shares tips to manage <a href="/">hot flashes from breast cancer treatment.</a></Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{height: 400}}>
                        <CardMedia
                            component='img'
                            image='https://www.hopkinsmedicine.org/_includes/_images/summer-safety.jpg'
                            alt="summer-safety"
                        />
                        <CardContent sx={{ p: 2, textAlign: "center" }}>
                            <Typography variant="h5" component="div" sx={{ textAlign: "left" }}>Summer Safety </Typography>
                            <Typography component="div" sx={{ textAlign: "left", fontSize: '16px' }}>Here are some <a href='/'>safety tips</a> to help you and those you love stay safer and healthier all summer long.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Featurestories