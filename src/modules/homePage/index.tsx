import { Grid } from "@mui/material";
import Header from "../commonComponents/header/index.desktop";
import useMediaQuery from '@mui/material/useMediaQuery';
import Carasouel from "./components/carousal";
import OurClients from "./components/ourClients";
import LogoSlider from "./components/ourClientsCarousel/LogoCarousel";
import { About } from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import OurServices from "./components/ourServices";
import Review from "./components/review";
import MeetUs from "./components/meetUs";
import OurWork from "./components/ourWork";
import FooterMobile from "./components/footerMobile";
import { ResponsiveHeader } from "../commonComponents/header";
import OurClientsCarousel from "./components/ourClientsCarousel";
// import TempOurClient from "./components/ourClients/TempOurClient";



export function HomePage() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isLandscape = useMediaQuery('(min-width:600px) and (max-width:900px)', { noSsr: true });
  return (
    <Grid container gap="10px" style={{ overflow: 'hidden' }}>

      <ResponsiveHeader></ResponsiveHeader>
      <Carasouel />
      {/* <OurClients /> */}
      {!isMobile && <OurClientsCarousel />}
      {isMobile && <LogoSlider/>}
      {/* <TempOurClient /> */}
      <OurServices />
      <About />
      <OurWork />
      <Review />
      <ContactUs />
      <MeetUs />
      {(isMobile && <FooterMobile/>) || (isLandscape && <FooterMobile/>)}
      {!isMobile && !isLandscape&&  <Footer />}
      {/* {isMobile && <FooterMobile />} */}
    </Grid>
  );
}