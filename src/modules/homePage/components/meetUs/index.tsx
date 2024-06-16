import { Box, Grid, Typography } from "@mui/material";
import GoogleMapReact from 'google-map-react';
import styles from "./styles.module.css"
import useMediaQuery from '@mui/material/useMediaQuery';
function MeetUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const isMobile = useMediaQuery('(max-width:600px)');
  console.log(isMobile);
  return (
    <Box className={styles.frameParent} id="meetus">
      <Box className={styles.meetUsWrapper}>
        <h1 className={styles.meetUs}>Meet Us</h1>
      </Box>

      <Grid spacing={2} p={2} width='75vw' bgcolor='#EADBC8' height={isMobile ? '86vh' : '47vh'} border= '2px solid black' m='auto' flexDirection="row" container display='flex' borderRadius='10px' justifyContent='space-evenly'>


        <Grid container item md={6} height={isMobile ? '25vh' : '40vh'} width="55vw" borderRadius="10px" overflow="hidden">


          {/* <GoogleMapReact

            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >

          </GoogleMapReact> */}

{/* <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60313.62604998036!2d72.86384894176219!3d19.125124710571857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8081c1d7b43%3A0xbaf100c54b8be366!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718298864893!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}



<Box
      sx={{
        width: '100%',
        height: '100%',
        border: 'none',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '56.25%', // 16:9 aspect ratio
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15089.175338429783!2d72.8340443!3d19.0067696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d3693b12b%3A0x27cf82ad5efa9e9a!2sRasik%20Communications!5e0!3m2!1sen!2sin!4v1718456015635!5m2!1sen!2sin"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '0'
        }}
        
        allowFullScreen="true"
        loading="lazy"
      ></iframe>
    </Box>

        </Grid>
        <Grid container item md={3} >
          <Box flexDirection="column" >
            <Typography fontWeight="600" variant="h5" >Office</Typography>
            <Typography>109, Prime Plaza, J. V. Patel ITI Compound,Opp. Prabhadevi Railway Station, Prabhadevi Station (W)
              Mumbai- 400 013.</Typography>
          </Box>
          <Box>
            <Typography fontWeight="600" variant="h5">Email</Typography>
            {/* <Typography>109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) 
                 Mumbai- 400 013.</Typography> */}
            <p className={styles.rasikads43gmailcomPrashant}>
              <Grid className={styles.rasikEmail} height="4vh" width="40vw">


                <a
                  className={styles.rasikads43gmailcom}
                  href="mailto:rasikads43@gmail.com"
                  target="_blank"
                >
                    <Typography className={styles.rasikads43gmailcom1} fontSize="14px">
                      rasikads43@gmail.com
                    </Typography>

                </a>
              </Grid>
              <Grid className={styles.prashantEmail}>
                <a className={styles.rasikads43gmailcom}
                  href="mailto:prashant@rasikcommunications.com"
                  target="_blank"
                  >
                    <Typography className={styles.prashantrasikcommunicationsc} fontSize="14px">
                      prashant@rasikcommunications.com
                    </Typography>
                  
                </a>
              </Grid>
            </p>
          </Box>
        </Grid>
        <Grid container item md={3} justifyContent='left' flexDirection='column'>

          <Typography fontWeight="600" variant="h5">Contacts</Typography>

          <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'left' }}>
            <Box>
              <Typography>Mr. Prashant Shah</Typography>
              <Typography> Phone : +91-9768128256</Typography>
            </Box>
            <Box>
              <Typography>Mr. Parth Shah</Typography>
              <Typography> Phone : +91-9821028256</Typography>
            </Box>
            <Box>
              <Typography>Ms. Twinkle Shah</Typography>
              <Typography>Phone : +91-8898827588</Typography>
            </Box>
          </Box>
        </Grid>
        {/* <Grid height = {isMobile?"50vh":"170px"} width={isMobile?"61vw":"496.25px"}>        
          <Box className={styles.frameWrapper} >
            <Box className={styles.frameGroup}>
              <Box className={styles.office109PrimePlazaJVParent}>
                <Box className={styles.office109PrimeContainer}>
                  <p className={styles.office}>
                    <b>OFFICE</b>
                  </p>
                  <p className={styles.primePlazaJVPatelItCo}>
                    <span>
                      <span
                        className={styles.primePlazaJ}
                      >{`109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) `}</span>
                    </span>
                  </p>
                  <p className={styles.mumbai400013}>
                    <span>
                      <span className={styles.mumbai4000131}>
                        Mumbai- 400 013.
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>
                      <span className={styles.blankLine1}>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.blankLine2}>
                    <span>
                      <span className={styles.blankLine3}>&nbsp;</span>
                    </span>
                  </p>
                </Box>
                <Box className={styles.eMailRasikads43gmailcomPrWrapper}>
                  <Box className={styles.eMailRasikads43gmailcomPr}>
                    <Grid container height="5vh" width="40vw">

                    
                    <p className={styles.eMail} >
                      <b>E-Mail</b>
                    </p>
                    </Grid>
                    <p className={styles.rasikads43gmailcomPrashant}>
                      <Grid className={styles.rasikEmail} height="4vh" width="40vw">

                      
                      <a
                        className={styles.rasikads43gmailcom}
                        href="mailto:rasikads43@gmail.com"
                        target="_blank"
                      >
                        <span>
                          <span className={styles.rasikads43gmailcom1}>
                            rasikads43@gmail.com
                          </span>
                        </span>
                      </a>
                      </Grid>
                      <Grid className= {styles.prashantEmail}>
                      <a className={styles.rasikads43gmailcom}
                        href="mailto:prashant@rasikcommunications.com"
                        target="_blank">
                      <span>
                        &nbsp;
                        <span className={styles.prashantrasikcommunicationsc}>
                          prashant@rasikcommunications.com
                        </span>
                      </span>
                      </a>
                      </Grid>
                    </p>
                    <p className={styles.blankLine4}>
                      <span>&nbsp;</span>
                    </p>
                    <p className={styles.blankLine5}>
                      <span>&nbsp;</span>
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.contactsMrPrashantContainer}>
                <p className={styles.contacts}>
                  <b>Contacts</b>
                </p>
                <p className={styles.mrPrashantShah}>
                  <span>
                    <span className={styles.mrPrashantShah1}>
                      Mr. Prashant Shah
                    </span>
                  </span>
                </p>
                <p className={styles.cell919768128256}>
                  <span>
                    <span className={styles.cell9197681282561}>
                      Cell : +91-9768128256
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine6}>
                  <span>
                    <span className={styles.blankLine7}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.mrParthShah}>
                  <span>
                    <span className={styles.mrParthShah1}>Mr. Parth Shah</span>
                  </span>
                </p>
                <p className={styles.cell919821028256}>
                  <span>
                    <span className={styles.cell9198210282561}>
                      Cell : +91-9821028256
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine8}>
                  <span>
                    <span className={styles.blankLine9}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.mrTwinkleShah}>
                  <span>
                    <span className={styles.mrTwinkleShah1}>
                      Mr. Twinkle shah
                    </span>
                  </span>
                </p>
                <p className={styles.cell918898827588}>
                  <span>
                    <span className={styles.cell9188988275881}>
                      Cell : +91-8898827588
                    </span>
                    <span className={styles.blankLine10}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine11}>
                  <span>
                    <span className={styles.blankLine12}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine13}>
                  <span>
                    <span className={styles.blankLine14}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine15}>
                  <span>
                    <span className={styles.blankLine16}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine17}>
                  <span>
                    <span className={styles.blankLine18}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine19}>
                  <span>
                    <span className={styles.blankLine20}>&nbsp;</span>
                  </span>
                </p>
              </Box>
            </Box>
          </Box>
        </Grid> */}


      </Grid>

      {/* </Grid> */}
      <Box style={{ height: 20 }} />
    </Box>
  )
}

export default MeetUs;