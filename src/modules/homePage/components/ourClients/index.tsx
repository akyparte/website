import { Box, Grid, Typography } from '@mui/material';
import '../../../../App.css';


function OurClients() {
    return (

        <Grid container display='flex' alignItems='center' flexDirection='column' sx={{ height: { xs: '50vh', md: '85vh'}, justifyContent: { xs: 'center', md: 'center' },margin:{md:'20px 0 0'} }} id='client' >
            <Box width="100%" >
            < Box textAlign='center' mb={3}  >
                <Typography sx={{ fontWeight: '600', fontSize: { xs: '40px', md: '64px', fontFamily: 'Inter, sans-serif' },  pb:"02vh" }}>Our Clients</Typography>
               
            </Box >
            {/*  */}
            {/* <Grid border= '2px solid black'> */}
            < Grid item m='30px 0' display='flex' justifyContent='space-evenly' width='100%' gap="2vw" >
                <img src='/assets/Adenwal jewellers.png' className='our-image' />
                <img src='/assets/Digi-1.svg' className='our-image' />
                <img src='/assets/LG Hing.svg' className='our-image' />
                <img src='/assets/Milan fancy fabric.svg' className='our-image' />
                <img src='/assets/Roopkala.png' className='our-image roop-kala-img' />

            </Grid >
            <Grid m='30px 0' item width='100%' display='flex' justifyContent='space-evenly' gap="2vw">
                <img src='/assets/Roopmilan.svg' className='our-image roopmilan-img' />
                <img src='/assets/Saucy Affair.svg' className='our-image' />
                <img src='/assets/Somaiya.svg' className='our-image' />
                <img src='/assets/Tit Bit.svg' className='our-image' />

            </Grid>
            {/* </Grid> */}
            </Box>
        </Grid >


    )
}

export default OurClients;




{/* <Grid container height='85vh' className={styles.mainGrid} alignItems='center' justifyContent='center' flexDirection='column' id="client" m='40px auto'>
<Box textAlign='center'>
    <Typography variant='h2' sx={{ fontWeight: '600' }}>Our Clients</Typography>
    <Typography variant='h6'>Overseas and Retail clients</Typography>
</Box>

<Grid item m={3} className={styles.logoParent} >
    <img src='/assets/logo1.png' className={styles.logo} />
    <img src='/assets/logo2.png' className={styles.logo} />
    <img src='/assets/logo3.png' className={styles.logo} />
    <img src='/assets/logo4.png' className={styles.logo} />
    <img src='/assets/logo5.png' className={styles.logo} />
</Grid>
<Grid item className={styles.logoGroup} >
    <img src='/assets/logo6.png' className={styles.logo} />
    <img src='/assets/logo7.png' className={styles.logo} />
    <img src='/assets/logo8.png' className={styles.logo} />
    <img src='/assets/logo9.png' className={styles.logo} />

</Grid>
</Grid> */}