import React from 'react'
import {Box, Typography,Stack, Grid, Item, Button, CardContent, CardMedia,CardActionArea,Card, Container } from '@mui/material'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import hero from '../../img/AdobeStock_305859435_Preview.jpeg'
import Cards from '../card/Cards';


const WhyUs = () => {
  return (
    <Container pb={7}>
      <Typography variant='h4' align='center' pb={6}>
        Why Us?
      </Typography>
       <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        spacing={3}
        mb={7}
        // direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        // wrap="nowrap"
        
      >
      
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Cards/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Cards/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Cards/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Cards/>
        </Grid>
        
        
        
      </Grid>
      {/* <Stack direction={'row'} spacing={5} justifyContent="space-evenly">
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

      </Stack> */}
    </Container>
  )
}

export default WhyUs