import { Grid, Typography, Box, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../../../App.css';
import Divider from '@mui/material/Divider';


import { useState, useEffect } from 'react';

const overseasImages = [
  {
    img1: 'assets/overseas/active_consultant.svg',
    modal1: 'assets/ourworkmodals/activeconsultant.jpg',
    img2: 'assets/overseas/ajeet_manpower.svg',
    modal2: 'assets/ourworkmodals/ajeet.jpg'

  },
  {
    img1: 'assets/overseas/arafa_travels.svg',
    modal1: 'assets/ourworkmodals/arafatravels.jpg',
    img2: 'assets/overseas/ASMACS.svg',
    modal2: 'assets/ourworkmodals/asmacs.jpg'

  },
  {
    img1: 'assets/overseas/bhatia_employ.svg',
    modal1: 'assets/ourworkmodals/bhatia.jpg',
    img2: 'assets/overseas/dhaid_travels.svg',
    modal2: 'assets/ourworkmodals/dhaidtravels.jpg',

  },
  {
    img1: 'assets/overseas/prerna.svg',
    modal1: 'assets/ourworkmodals/prerna.jpg',
    img2: 'assets/overseas/tradesmen.svg',
    modal2: 'assets/ourworkmodals/tradesmen.jpg'
  },

];
const digitalImages = [
  {
    img1: 'assets/digitalclients/digi1.svg',
    modal1: 'assets/ourworkmodals/digi1.jpg',
    img2: 'assets/digitalclients/saucyaffair.svg',
    modal2: 'assets/ourworkmodals/saucy.jpg'

  },
  {
    img1: 'assets/digitalclients/somaiya.svg',
    modal1: 'assets/ourworkmodals/Somaiya.jpg',
    img2: 'assets/digitalclients/titbit.svg',
    modal2: 'assets/ourworkmodals/titbit.jpg'

  },
  {
    img1: 'assets/digitalclients/giftingmaze.svg',
    modal1: 'assets/ourworkmodals/giftingmaze.jpeg',
    img2: 'assets/digitalclients/awwbaby.svg',
    modal2: 'assets/ourworkmodals/awwbaby.jpeg'
  }

];

const printClientImg = [
  {
    img1: 'assets/printclients/adenwal_jewellers.svg',
    modal1: 'assets/ourworkmodals/adenwala.jpg',
    img2: 'assets/printclients/bhatia_employ.svg',
    modal2: 'assets/ourworkmodals/bhatia.jpg'

  },
  {
    img1: 'assets/printclients/digi1.svg',
    modal1: 'assets/ourworkmodals/digi1.jpg',
    img2: 'assets/printclients/lghing.svg',
    modal2: 'assets/ourworkmodals/lghing.jpg'

  },
  {
    img1: 'assets/printclients/milan_fabric.svg',
    modal1: 'assets/ourworkmodals/milan.jpg',
    img2: 'assets/printclients/osaka.svg',
    modal2: 'assets/ourworkmodals/osaka.jpg'

  },
  {
    img1: 'assets/printclients/prerna.svg',
    modal1: 'assets/ourworkmodals/prerna.jpg',
    img2: 'assets/printclients/roopkala.svg',
    modal2: 'assets/ourworkmodals/roopkala.jpg'

  },
  {
    img1: 'assets/printclients/roopmilan.svg',
    modal1: 'assets/ourworkmodals/roopmilan.jpg',
    img2: 'assets/printclients/somaiya.svg',
    modal2: 'assets/ourworkmodals/Somaiya.jpg'

  },
  {
    img1: 'assets/printclients/stayon.svg',
    modal1: 'assets/ourworkmodals/stayon.jpg',
    img2: 'assets/printclients/titbit.svg',
    modal2: 'assets/ourworkmodals/titbit.jpg'

  },
  {
    img1: 'assets/printclients/tradesmen.svg',
    modal1: 'assets/ourworkmodals/tradesmen.jpg',
    img2: 'assets/printclients/varsha.svg',
    modal2: 'assets/ourworkmodals/varsha.jpg'
  },

];



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  // bgcolor: 'transparent',
  bgcolor: 'rgba(255, 255, 255, 0.2)',
  boxShadow: 0,
  p: 4,
  outline: 'none',
  borderRadius: '10px'
};









function OurWork() {

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);
  const [visibleThird, setVisibleThird] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);


  const handleOpen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    const handleScroll = () => {
      const firstCarousel = document.getElementById('first-carousel');
      const secondCarousel = document.getElementById('second-carousel');
      const thirdCarousel = document.getElementById('third-carousel');

      if (firstCarousel) {
        const rect = firstCarousel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {

          setVisibleFirst(true);
        }
      }

      if (secondCarousel) {
        const rect = secondCarousel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {

          setVisibleSecond(true);
        }
      }

      if (thirdCarousel) {
        const rect = thirdCarousel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {

          setVisibleThird(true);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();


    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);




  return (
    <Grid className='our-work' sx={{ height: { xs: 'auto', md: '120vh' }, padding: { xs: '30px 10px 80px', md: '0' } }} width='100%' container id='ourwork' color='#000' bgcolor='#FFF6E7' >


      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} width="80vw">


          {selectedImage && (
            <img src={selectedImage} alt="Modal Content" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          )}
        </Box>
      </Modal>
      {/* height of our work heading on desktop is 18% */}
      <Grid item sx={{ height: { xs: '6%', md: '18%' }, marginBottom: { xs: '0px', md: '0' }, paddingTop: { xs: '0', md: '10vh' } }} display="flex" alignItems="center" justifyContent="flex-start" flexDirection="column" width="100%">
        <Typography style={{ fontWeight: '600', fontSize: '64px', fontFamily: 'Playfair Display' }} textAlign='center'>Our Work</Typography>
        {/* <Typography textAlign='center' fontSize="16px" >Your Vision, Our Expertise</Typography> */}
      </Grid>
      {/* height of img carausl img grid  on desktop is 82% */}
      <Grid container item sx={{ height: { xs: '90%', md: '82%' }, paddingTop: { xs: '0', md: '15vh' } }} >

        <Grid item id="first-carousel" className={visibleFirst ? 'fade-in-left' : ''} md={4} sm={5} display='flex' alignItems='center' flexDirection='column' sx={{ margin: { xs: 'auto', md: '0' }, width: { xs: '85%' }, marginBottom: { xs: '20px', md: '0' } }} >
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>

          <Box sx={{ margin: '10px auto', borderTop: '4px solid #000', width: '15%', borderRadius: '5px' }}> </Box>

          <Box bgcolor='F1E5D1' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '95%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false} interval={5000}>
              {printClientImg.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: { xs: '45vh', md: '50vh' } }}>

                  <Box onClick={() => handleOpen(img.modal1)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img1} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                  <Box onClick={() => handleOpen(img.modal2)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img2} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>

        </Grid>


        {/* className={visibleSecond ? 'fade-in-bottom' : ''} */}
        <Grid item id="second-carousel" className={visibleSecond ? (isMobile ? 'fade-in-right' : 'fade-in-bottom') : ''} md={4} display='flex' alignItems='center' flexDirection='column' sx={{ margin: { xs: 'auto', md: '0' }, width: { xs: '85%' }, marginBottom: { xs: '20px', md: '0' } }}>
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Digital Clients</Typography>
          <Box sx={{ margin: '10px auto', borderTop: '4px solid #000', width: '15%', borderRadius: '5px' }}> </Box>
          <Box bgcolor='F1E5D1' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '95%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false} interval={5000}>
              {digitalImages.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: { xs: '45vh', md: '50vh' } }}>

                  <Box onClick={() => handleOpen(img.modal1)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img1} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                  <Box onClick={() => handleOpen(img.modal2)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img2} className='ourwork-img' style={{ height: '18vh' }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>



        <Grid item className={visibleThird ? (isMobile ? 'fade-in-left' : 'fade-in-right') : ''} id="third-carousel" md={4} display='flex' alignItems='center' flexDirection='column' sx={{ margin: { xs: 'auto', md: '0' }, width: { xs: '85%' } }}  >
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Overseas Clients</Typography>
          <Box sx={{ margin: '10px auto', borderTop: '4px solid #000', width: '15%', borderRadius: '5px' }}> </Box>
          <Box bgcolor='F1E5D1' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '95%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false} interval={5000}>
              {overseasImages.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: { xs: '45vh', md: '50vh' } }}>

                  <Box onClick={() => handleOpen(img.modal1)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img1} className='ourwork-img' style={{ height: '100%', }} />

                  </Box>
                  <Box onClick={() => handleOpen(img.modal2)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img2} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>

      </Grid >


    </Grid >
  )
}

export default OurWork;


{/* <Grid height='600px' width='100%'  border={2} container p={5} display='flex' alignItems='center'  flexDirection='column' gap='40px' id='ourwork'>
<Grid item>
    <Typography variant='h3'>Our Work</Typography>
    <Typography>Your Vision, Our Expertise</Typography>
</Grid>
<Grid container item >
    <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
        <Typography>Retail Clients</Typography>
        <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
    </Grid>
    <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
        <Typography>Overseas Clients</Typography>
        <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
    </Grid>
</Grid>


</Grid> */}