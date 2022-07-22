import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function Features() {
  return (
    <Container maxWidth="lg" sx={{ p: 6 }}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <CardActionArea>
            <Card sx={{ height: 244, p: 2, textAlign: "center" }}>
              <img
                src="/assets/stethoscope-blue.svg"
                alt="stethoscope-blue"
                style={{ height: 80, width: 80 }}
              />
              <CardContent sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h4" component="div" sx={{ p: 2 }}>
                  Doctors
                </Typography>
                <Typography varient="body2" component="div">
                  Search for doctors by name, specialty or location.
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>

        <Grid item sm={3}>
          <CardActionArea>
            <Card sx={{ height: 244, p: 2, textAlign: "center" }}>
              <img
                src="/assets/location-blue.svg"
                alt="whloe grains"
                style={{ height: 80, width: 80 }}
              />
              <CardContent sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h4" component="div" sx={{ p: 2 }}>
                  Locations
                </Typography>
                <Typography varient="body2" component="div">
                  Find care in an area convinent to you
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item sm={3}>
          <CardActionArea>
            <Card sx={{ height: 244, p: 2, textAlign: "center" }}>
              <img
                src="/assets/appointment-blue.svg"
                alt="whloe grains"
                style={{ height: 80, width: 80 }}
              />
              <CardContent sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h4" component="div" sx={{ p: 2 }}>
                  Appoinments
                </Typography>
                <Typography varient="body2" component="div">
                  Schedule an appointment online.
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item sm={3}>
          <CardActionArea>
            <Card sx={{ height: 244, p: 2, textAlign: "center" }}>
              <img
                src="/assets/mychart-blue.svg"
                alt="whloe grains"
                style={{ height: 80, width: 80 }}
              />
              <CardContent sx={{ p: 2, textAlign: "center" }}>
                <Typography variant="h4" component="div" sx={{ p: 2 }}>
                  MyChart
                </Typography>
                <Typography varient="body2" component="div">
                  View test results, schedule most appointments and more.
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Features;
