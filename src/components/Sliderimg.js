import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SliderImg = (props) =>{

    let CarPos ={
        data:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }

    return(
        <div>
            <Slider {...CarPos}>
                <div>
                    <Grid container spacing = "2">
                        <Grid item xs="6">
                            left
                        </Grid>
                        <Grid item xs="6">
                            right
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing = "2">
                        <Grid item xs="6">
                            left
                        </Grid>
                        <Grid item xs="6">
                            right
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing = "2">
                        <Grid item xs="6">
                            left
                        </Grid>
                        <Grid item xs="6">
                            right
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing = "2">
                        <Grid item xs="6">
                            left
                        </Grid>
                        <Grid item xs="6">
                            right
                        </Grid>
                    </Grid>
                </div>
            </Slider>
        </div>
    );
}
export default SliderImg;