import React from 'react'
import {Box, Typography,Stack, Grid, Item, Button} from '@mui/material'
import Heroimg from '../../img/AdobeStock_305859435_Preview.jpeg'

const Hero = () => {
  return (
    <Box pb={20} alignContent='center' >
      <Grid container spacing={1} align="center">
        
      
      {/* <Stack direction={"row"} justifyContent='space-around' alignItems='center'> */}
        <Grid item xs={12} sm={12} md={6} lg={6} >
        <Typography variant='h2'fontWeight={500} align="center" mt={9}>
          Building Better<br/> Assignments 
        </Typography>
        <Typography variant='subtitle1' mb={5} align="center">
          implementing best pedagogical practices can be nearly impossible. We make it easy.
        </Typography>
        <Button variant='contained' sx={{fontSize: '20px',borderRadius: '50px', }} >Getting Started</Button>

        </Grid>
        <Grid item xs={6} align='center'>
          <Box sx={{
             
            backgroundImage:`url(${Heroimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: 300,
            width: 500,
        }} mt={10} ml={9}>

          </Box>

        </Grid>

      {/* </Stack> */}
      </Grid>


    </Box>
  )
}

export default Hero