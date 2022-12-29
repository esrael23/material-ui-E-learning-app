import { CssBaseline, Typography, useTheme} from '@mui/material'
import {createTheme,  ThemeProvider,} from '@mui/material/styles'

import Appbar from './component/appbar/Appbar';
import Tastimonials from './component/Tastimonials/Tastimonials';
import Courses from './component/Courses/Courses';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import WhyUs from './component/Whyus/WhyUs';
import { useState } from 'react';

 // color themey



function App() {

  const [darkmode, setDarkmode] = useState(false)
 
  const darkTheme = createTheme({
    palette: {
      mode: darkmode?'dark':'light',
      // mode: 'light'
      // type: 'dark',
    },
  });
 

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    < >
    <Appbar check ={darkmode} change = {() => setDarkmode(!darkmode)}/>
    <Hero/>
    <WhyUs/>
    <Courses/>
    {/* <Tastimonials/> */}
    <Footer/>
      
    </>
  </ThemeProvider>
    // < >
    // <Appbar/>
    // <Hero/>
    // <WhyUs/>
    // {/* <Courses/> */}
    // {/* <Tastimonials/> */}
    // {/* <Footer/> */}
      
    // </>
  );
}

export default App;
