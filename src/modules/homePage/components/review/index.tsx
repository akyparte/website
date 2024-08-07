import { Box, Grid, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { QuotationMark } from "../../../commonComponents/icons";
import '../../../../App.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    "quote": "“We have shared an enduring and endearing business relationship with Rasik – one that helped us believe in the power of advertising to achieve our corporate goals. They have been most cooperative, even when the chips were down.”",
    "author": "Maruti Herbal",
    "author2": "Jayesh Mehta"
  },
  {
    "quote": "“Ours has been a very cordial and mutually rewarding association with Rasik for the past two decades. Their personal touch is what impressed us the most. They are highly approachable, readily adapt to change, and empathize with you in a manner that’s rare these days.”",
    "author": "Digi-1",
    "author2": "Amit Mulani"
  },
  {
    "quote": "“Give it and forget it. That’s the kind of confidence we have in Rasik’s abilities when it comes to executing our ad releases. Best rates and promptness are what they are reputed for, and we’ve never been disappointed in all the years that we have worked with them.”",
    "author": "ASMACS",
    "author2": "Abhay Biswal"
  },
  {
    "quote": "“An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach, especially when it comes to media releases.”",
    "author": "Somaiya Group",
    "author2": ""
  },
  {
    "quote":"“Rasik Publicity transformed our brand's presence across print, digital, and social media. Their innovative strategies and creative campaigns significantly boosted our engagement and sales. Highly recommend their services!”",
    "author":"Arafa travels",
    "author2":""
  },
  {
    "quote":"“Working with Rasik Publicity has been a game-changer for our marketing efforts. Their expertise in  digital, and social media advertising helped us reach our target audience effectively. Professional, reliable, and results-driven!”",
    "author":"Tit bit group",
    "author2":""
  },
  {
    "quote":"“The team at Rasik Publicity exceeded our expectations with their comprehensive approach to advertising. The eye-catching print ads in the world of digital have delivered exceptional results that drove our business growth. Truly a top-notch agency! Rasik Publicity's dedication and creativity shine through in every campaign they manage”",
    "author":"Roopmilan",
    "author2":""
  }
];

const Review: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1200px)', { noSsr: true });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeStyles = (delay: number) => ({
    transition: `opacity 1s ease-out ${delay}ms, transform 1s ease-out ${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
  });


  return (
    <Grid container sx={{ height: { xs: '500px', md: '85vh'  } }} display='flex' flexDirection='column' alignItems='center' justifyContent='center' id='testimonials' >
      <Grid item pb={2}><Typography sx={{ fontWeight: '900', fontSize: { xs: '23px', md: '2.5vw' }, marginBottom: { xs: '20px', md: 'none' } }}>What our clients have to say</Typography></Grid>


      <Grid item sx={{ width: { xs: '90%', md: '90%' }, height: { sx: '220px', md: '300px' } }} pl="2.2vw">
        <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false} interval={3000} transitionTime={2000} >
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ height: { xs: '36vh', md: '320px' }, padding: { xs: 'none', md: '5px' } }}>
              <Box sx={{ textAlign: 'left', display: { xs: 'block', md: 'block', } }}><QuotationMark /></Box>

              <Typography sx={{ ...fadeStyles(0), fontSize: isMobile ? '15px' : isTablet ? '25px' : '1.9vw', textAlign: 'left' }}>{testimonial.quote}</Typography>
              <Typography sx={{ ...fadeStyles(200), fontWeight: '700', fontSize: { xs: '18px', md: '1.9vw' }, textAlign: 'left', marginTop: '10px' }}>
                {testimonial.author2? testimonial.author2+',' : ''} {testimonial.author}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Grid>



    </Grid>
  )
}

export default Review;