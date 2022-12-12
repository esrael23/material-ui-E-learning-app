import React from 'react'
import {Box, Typography,Stack, Grid, Item, Button} from '@mui/material'
import Heroimg from '../../img/AdobeStock_305859435_Preview.jpeg'

const Hero = () => {
  return (
    <Box pb={20}>
      <Stack direction={'row'} justifyContent='space-around' alignItems='center'>
        <Grid item xs={6}>
        <Typography variant='h2'fontWeight={500}>
          Building Better<br/> Assignments 
        </Typography>
        <Typography variant='subtitle1' mb={5}>
          implementing best pedagogical practices can be nearly impossible. We make it easy.
        </Typography>
        <Button variant='contained' sx={{fontSize: '20px',borderRadius: '50px',  }}>Getting Started</Button>

        </Grid>
        <Grid item xs={6}>
          <Box sx={{
            backgroundImage:`url(${Heroimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: 300,
            width: 500,
        }} mt={10}>

          </Box>

        </Grid>

      </Stack>


    </Box>
  )
}

export default Hero