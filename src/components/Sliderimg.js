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
    <Container>
      <Slider {...CarPos}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <img src="https://www.hopkinsmedicine.org/johns-hopkins-childrens-center/_images/usnwr/usnwr-22-23/jhmSlide-640x274.jpg" alt="carousel-1" />
            </Grid>
            <Grid item xs={6}>
                <h3>aifgvuhsdiguiusgsiudgfpiug</h3><br/>
                {/* <hr /> same hr woh yelloe wale jaisa */}<br/>
                <p>aosfihsdipughpsiug hu igh  aioueghi i uhawiu hg ha rg  gu gh wiuhg iufg iudg iug</p>
            </Grid>
          </Grid>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Slider>
    </Container>
  );
};

export default SliderImg;