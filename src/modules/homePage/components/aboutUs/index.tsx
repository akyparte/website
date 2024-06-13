import Header from "../../../commonComponents/header/index.desktop";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css"
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <>

    <Grid container className={`${styles.container} ${inView ? styles.slideInUp : ''}`}  ref={ref} height="85vh" p={5} width='90vw' m='auto' id='about'>
      <Grid container display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
        {/* <Typography variant="h4">About Us</Typography>
                <Typography>Who are we?</Typography>
                <Typography sx={{wordWrap:'break-word',textIndent:'50px'}}>We are amongst the select few accredited with INS. It empowers us to deal directly with media houses across India. We have an excellent rapport with all the leading publications all over India. Hence you get the best ever rates & deals for your ads releases. You name anything in the world of print, electronic and web advertising and the entire range of services come to you without compromising on quality and without an iota of doubt. Our experience and expertise ensure that you get maximum impact for every Rupee of your media expenditure.
        </Typography> */}
        <Box className={styles.frameWrapper}>
          <Box className={styles.aboutUsParent}>
            <Typography className={styles.aboutUs} variant="h2" sx={{ fontWeight: '700' }}>About Us</Typography>
            <Box className={styles.whoAreWeWrapper}>
              <Box className={styles.whoAreWe}>Who are we?</Box>
            </Box>
          </Box>
        </Box>

        <Typography className={styles.weAreAmongstContainer} variant="h5" sx={{ fontWeight: '200' }}>
          <span
            className={styles.weAreAmongst}
          >{`We are amongst the select few accredited with INS. It empowers us to deal directly with media houses across India. We have an excellent rapport with all the leading publications all over India. Hence you get the best ever rates & deals for your ads releases. You name anything in the world of print, electronic and web advertising and the entire range of services come to you without compromising on quality and without an iota of doubt. Our experience and expertise ensure that you get maximum impact for every Rupee of your media expenditure.`}</span>
          <span className={styles.blankLine}>&nbsp;</span>
          <span
            className={styles.withALegacy}
          >{`With a legacy spanning over 6 decades of accomplishments and progress, we at Rasik are a proud lot. Our founding principles - namely integrity, service and commitment, are fundamental, distinguishing and intrinsic to us. By combining conventional wisdom and modern thinking with ethical conduct, we've gained an impeccable reputation-both among our clientele and associates. And with it, their unflinching trust and support. Reason why we have grown even when the going was tough. It's people like you with whom we've flourished and now look forward to many more milestones together in the years to come. `}</span>
          <span className={styles.blankLine1}>&nbsp;</span>
        </Typography>
      </Grid>

    </Grid>






  </>
}
