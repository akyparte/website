import Header from "../../../commonComponents/header/index.desktop";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css"
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '@mui/material/useMediaQuery';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const isMobile = useMediaQuery('(max-width:600px)');
  return <>

    <Grid container ref={ref} className={`${styles.frameParent} ${inView ? styles.fadeIn : ''}`} item md={5} display='flex' flexDirection='column' justifyContent='center' sx={{ textAlign: { xs: 'center', md: 'center' } ,padding: { xs: '2vw', md: '0px' },height: { xs: '80vh', md: '85vh' } }} id="about">
      <Box className={styles.secondGrid} paddingTop="5vh" paddingBottom="5vh" width="92vw" height="95vh" display='flex'gap="3vh" flexDirection='column' alignItems='center' justifyContent='center' >
        <Grid className={styles.aboutUs} textAlign="center" >About Us</Grid>
        {/* <Typography >Who are we?</Typography> */}

        {/* <Typography sx={{wordWrap:'break-word',textIndent:'50px'}}>We are amongst the select few accredited with INS. It empowers us to deal directly with media houses across India. We have an excellent rapport with all the leading publications all over India. Hence you get the best ever rates & deals for your ads releases. You name anything in the world of print, electronic and web advertising and the entire range of services come to you without compromising on quality and without an iota of doubt. Our experience and expertise ensure that you get maximum impact for every Rupee of your media expenditure.</Typography> */}
        <Typography  textAlign={isMobile?"left":"center"} sx={{ fontSize: { xs: '15px', md: '20px' } }}>
          <span 
            className={styles.weAreAmongst}
          >{`Welcome to Rasik Publicity, India’s trusted INS-accredited advertising agency. With over six decades of experience, we specialize in comprehensive Print and digital marketing solutions, including Google Ads, social media strategies, E-commerce management, and Print releases—all at competitive rates. Our expertise spans both digital platforms and traditional print media, ensuring top-quality results and a powerful presence online and offline.`}</span>
          <span className={styles.blankLine}>&nbsp;</span>
          <span
            className={styles.withALegacy}
          >
            {/* `} <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>integrity, service, and commitment.</span>{` */}
            {`We pride ourselves on delivering innovative advertising techniques tailored to meet your unique business needs. As one of the select few accredited with INS, we have direct access to media houses across India, ensuring you get the best rates and deals for your ad releases. Our strong relationships with leading publications nationwide guarantee maximum impact for every Rupee spent. Partner with us to enhance your visibility and engagement through quality advertising.  `}
            </span>
          <span className={styles.blankLine1}>&nbsp;</span>
        </Typography>
        {/* <Box className={styles.frameWrapper}>
          <Box className={styles.aboutUsParent}>
            <Typography className={styles.aboutUs} variant="h2" sx={{ fontWeight: '700' }}>About Us</Typography>
            <Box className={styles.whoAreWeWrapper}>
              <Box className={styles.whoAreWe}>Who are we?</Box>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ fontSize: { xs: '15px', md: '20px' } }}>
          <span
            className={styles.weAreAmongst}
          >{`We are amongst the select few accredited with INS. It empowers us to deal directly with media houses across India. We have an excellent rapport with all the leading publications all over India. Hence you get the best ever rates & deals for your ads releases. You name anything in the world of print, electronic and web advertising and the entire range of services come to you without compromising on quality and without an iota of doubt. Our experience and expertise ensure that you get maximum impact for every Rupee of your media expenditure.`}</span>
          <span className={styles.blankLine}>&nbsp;</span>
          <span
            className={styles.withALegacy}
          >{`With a legacy spanning over 6 decades of accomplishments and progress, we at Rasik are a proud lot. Our founding principles - namely integrity, service and commitment, are fundamental, distinguishing and intrinsic to us. By combining conventional wisdom and modern thinking with ethical conduct, we've gained an impeccable reputation-both among our clientele and associates. And with it, their unflinching trust and support. Reason why we have grown even when the going was tough. It's people like you with whom we've flourished and now look forward to many more milestones together in the years to come. `}</span>
          <span className={styles.blankLine1}>&nbsp;</span>
        </Typography> */}
      </Box>

    </Grid>






  </>
}
