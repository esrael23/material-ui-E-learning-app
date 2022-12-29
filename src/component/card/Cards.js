import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent,Typography} from '@mui/material'
import hero from '../../img/AdobeStock_305859435_Preview.jpeg'

// sx={{ maxWidth: 345 }}
const Cards = () => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hero}
          alt="sd"

        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            compoter 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    // </Card>
  )
}

export default Cards