import React from 'react'
import {Card,CardActionArea,CardMedia,CardContent,Typography,Box, TextField,MenuItem,Grid} from '@mui/material'
import hero from '../../img/AdobeStock_305859435_Preview.jpeg'

const Courses = () => {
  return (
    <Box>
      <Typography variant="h4" color="initial" align='center' pb={4}>
        find <b>Online Tutor</b>  in any <b>Subject</b>
      </Typography>

      <TextField 
      
      
      fullWidth='true'
          id="outlined-select-currency"
          select
          label="which subject do you need to help with?"
          
          
        >
          {/* {currencies.map((option) => (
            <MenuItem >
              
            </MenuItem>
          ))} */}
        </TextField>

        <Box mx={8} align='center' pt={4}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={3}>
    {/* <Item> */}
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Box>
    
  </Grid>
  <Grid item xs={3}>
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  </Grid>
  <Grid item xs={3}>
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  </Grid>
  <Grid item xs={3}>
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  </Grid>
  <Grid item xs={3}>
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  </Grid>
  <Grid item xs={3}>
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  </Grid>
  <Grid item xs={3}>
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  </Grid>
  <Grid item xs={3}>
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
            Computer Sceince
          </Typography>
          <Typography variant="body2" color="primary">
            SHOW DESCRIPTION
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  </Grid>


  
  
</Grid>
        </Box>
  <Typography align='center' pt={8} variant="h5" color={'primary'}>show more</Typography>

    </Box>
  )
}

export default Courses