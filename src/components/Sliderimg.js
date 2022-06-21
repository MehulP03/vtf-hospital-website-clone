import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid } from "@mui/material";
import Slider from "react-slick";

const SliderImg = (props) => {
  let CarPos = {
    data: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container  maxWidth="lg" sx={{p:6}}>
      <Slider {...CarPos}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{p:2}}>
                <img src="https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/usnwr/usnwr-22-23/jhmSlide-640x274.jpg" alt="carousel-1" height={200} width={468}  />
            </Grid>
            <Grid item xs={6} sx={{p:2}}>
                <h3>Top ranked by U.S. News & World Report – Again!</h3>
                <hr style={{ marginLeft: '40%', marginRight: '50%', color: 'yellow' , align:'left'}} />
                <p>Johns Hopkins Children’s Center has again improved its ranking on U.S. News & World Report’s Best Children’s Hospitals list.</p>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src="https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/usnwr/usnwr-22-23/jhmSlide-640x274.jpg" alt="carousel-1"  height={200} width={468}/>
            </Grid>
            <Grid item xs={6}>
            <h3>Top ranked by U.S. News & World Report – Again!</h3>
                <hr style={{ marginLeft: '40%', marginRight: '50%', color: 'yellow' , align:'left'}} />
                <p>Johns Hopkins Children’s Center has again improved its ranking on U.S. News & World Report’s Best Children’s Hospitals list.</p>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src="https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/usnwr/usnwr-22-23/jhmSlide-640x274.jpg" alt="carousel-1" height={200} width={468}/>
            </Grid>
            <Grid item xs={6}>
            <h3>Top ranked by U.S. News & World Report – Again!</h3>
                <hr style={{ marginLeft: '40%', marginRight: '50%', color: 'yellow' , align:'left'}} />
                <p>Johns Hopkins Children’s Center has again improved its ranking on U.S. News & World Report’s Best Children’s Hospitals list.</p>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src="https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/usnwr/usnwr-22-23/jhmSlide-640x274.jpg" alt="carousel-1" height={200} width={468} />
            </Grid>
            <Grid item xs={6}>
            <h3>Top ranked by U.S. News & World Report – Again!</h3>
                <hr style={{ marginLeft: '40%', marginRight: '50%', color: 'yellow' , align:'left'}} />
                <p>Johns Hopkins Children’s Center has again improved its ranking on U.S. News & World Report’s Best Children’s Hospitals list.</p>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </Container>
  );
};

export default SliderImg;