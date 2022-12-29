import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import hero from '../../img/AdobeStock_305859435_Preview.jpeg'

import React from 'react'
// sx={{ maxWidth: 245 }}
const Coursescard = () => {
  return (
    <Box>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hero}
          alt="gr iguana"

        />
        <CardContent align='center'>
          <Typography gutterBottom variant="h5" component="div">
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Box>
    
  )
}

export default Coursescard