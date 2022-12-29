import React from 'react'

import {Card,CardActionArea,CardMedia,CardContent,Typography,Box, TextField,MenuItem,Grid, Stack, Avatar} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box align='center'>
      <Typography variant="h3" align='center'>
        logo
      </Typography>
      <Typography variant="subtitle2" align='center'>
        My tutor is the bast online tutoring platform in the world. Lorem ipsum dolor set ala  
      </Typography>
      <Box align='center'>
        <Stack direction={'row'} align='center'>
        <GoogleIcon/>
        <InstagramIcon/>
        <FacebookIcon/>
        <LinkedInIcon/>


      </Stack></Box>
      
    </Box>
  )
}

export default Footer