
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import { Box, Grid } from '@mui/material';

function Carasouel() {
    return (
      <Grid mt='15vh' height='85vh' >  

          <Carousel  autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
                  <Box>
                      <img src="/assets/cookie.jpg" height='100%' className="carousal-img-custom"/>
                    
                  </Box>
                  <Box>
                      <img src="/assets/cookie.jpg" height='100%' className="carousal-img-custom"/>
                      
                  </Box>
                  <Box>
                      <img src="/assets/cookie.jpg" height='100%' className="carousal-img-custom"/>
                    
                  </Box>
              </Carousel>
              
          
      </Grid>
    )
  }
  
  export default Carasouel;
  
  