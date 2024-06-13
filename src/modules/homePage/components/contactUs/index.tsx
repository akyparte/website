import { Grid, Typography , Box} from '@mui/material';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./styles.module.css"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from 'react-intersection-observer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.send(
      'service_5g3ffli', // Replace with your EmailJS service ID
      'template_vt9r61r',
      formData,
      'A2aWUHE6R1nJV1nOh' // Replace with your EmailJS user ID (public key)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };
  const isMobile = useMediaQuery('(max-width:500px)');
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    
    <Grid  container width='90%' spacing={2} m='auto' height='85vh' flexDirection={isMobile ? 'column' : 'row'} p={3} >
      
      <Grid className={`${leftInView ? styles.slideInFromLeft : ''}`} width={isMobile?"80vw":"477px"} sx={{ marginBottom: isMobile ? 7 : 0 }} ref={leftRef} >
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.notSureWhatYouNeedWrapper}>
              <h1 className={styles.notSureWhat}>Not sure what you need?</h1>
            </div>
            <Grid className={styles.ourTeamAt} width={isMobile? "60vw": "477px"} >
              Our team at Rasik Communications will be more than happy to listen
              to you and suggest every idea you haven’t considered.
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid container className={`${styles.formGrid} ${rightInView ? styles.slideInFromRight : ''}`} item md={7} display='flex' height={isMobile ? '40vh':'52vh'} width={isMobile?"77vw":"646px"} bgcolor='#F1E5D1'  p={4} borderRadius='10px' ref={rightRef}>
      <form onSubmit={handleSubmit} style={{width:'100%',display:'flex',gap:'10px',flexDirection:'column'}} >
      <div style={{display:'flex',gap:'10px'}}>
        
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='First name*' style={{padding:'10px 15px',width:'50%',marginRight:'10px',border:'none',borderRadius:'10px', fontFamily:"Inria Sans"}}/>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Last name*'style={{padding:'10px 15px',width:'50%',border:'none',borderRadius:'10px', fontFamily:"Inria Sans"}} />
      </div>
      
      <div>
       
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email*' style={{width:'100%',border:'none',padding:'10px 15px',borderRadius:'10px', fontFamily:"Inria Sans"}}/>
      </div>
      <div>
       
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Phone*' style={{width:'100%',border:'none',padding:'10px 15px',borderRadius:'10px', fontFamily:"Inria Sans"}}/>
      </div>
      <div>
        
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Type Your Message...' style={{width:'100%',border:'none',padding:'10px 15px',borderRadius:'10px', fontFamily:"Inria Sans"}} rows="8" cols="50"/>
      </div>
      <button type="submit" style={{width:'100%',backgroundColor:'#000',color:'#fff',padding:'7px 10px',borderRadius:'10px'}}>Send</button>
    </form>
      </Grid>
    </Grid>
  )
}
export default ContactUs;
