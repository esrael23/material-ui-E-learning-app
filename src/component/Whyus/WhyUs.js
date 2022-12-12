import React from 'react'
import {Box, Typography,Stack, Grid, Item, Button, CardContent, CardMedia,CardActionArea,Card } from '@mui/material'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import hero from '../../img/AdobeStock_305859435_Preview.jpeg'
import Cards from '../card/Cards';


const WhyUs = () => {
  return (
    <Box pb={7}>
      <Typography variant='h4' align='center' pb={6}>
        Why Us?
      </Typography>
      <Stack direction={'row'} spacing={5} justifyContent="space-evenly">
        <Box>
        <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hero}
          alt="gr iguana"

        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Box>
        <Box>
        <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hero}
          alt="gr iguana"

        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Box>
        <Box>
        <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hero}
          alt="gr iguana"

        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Box>
        <Box>
        <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hero}
          alt="gr iguana"

        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
        </Box>

      </Stack>
    </Box>
  )
}

export default WhyUs