import React from 'react'

import {Card,CardActionArea,CardMedia,CardContent,Typography,Box, TextField,MenuItem,Grid, Stack, Avatar} from '@mui/material'
import avatorimg from '../../img/AdobeStock_305859435_Preview.jpeg'

const Tastimonials = () => {
  return (
    // container
    // responsif
    <Box >
      <Typography variant="h4" align='center' sx={{fontWeight: '600'}}>Dont take our word for it.</Typography>
      <Typography variant="h5" align='center' sx={{fontWeight: '600'}} pb={4} >Trust out customers</Typography>
    <Box pb={5}>
      
      <Grid container spacing={3} ml={5}>
      <Grid item >
        <Card> sx={{ maxWidth: 350 }} 
      <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar    sx={{
          backgroundImage: `url(${avatorimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: "10px",
          }}>
              
            </Avatar>
            <div>
              <Typography variant='h6' pt={2}>Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
            </div>
          </Box>
          <Typography variant='subtitle2' px={3}>lorem ipsum dolor sit m amel constectur adioicing elit solut asperires as</Typography>
          <Typography align='right' pr={4} pb={3}>23rd aprill 2022</Typography>
      </Card>
        </Grid>
        <Grid item >
        <Card sx={{ maxWidth: 350 }} >
      <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar    sx={{
          backgroundImage: `url(${avatorimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: "10px",
          }}>
              
            </Avatar>
            <div>
              <Typography variant='h6' pt={2}>Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
            </div>
          </Box>
          <Typography variant='subtitle2' px={3}>lorem ipsum dolor sit m amel constectur adioicing elit solut asperires as</Typography>
          <Typography align='right' pr={4} pb={3}>23rd aprill 2022</Typography>
      </Card>
        </Grid>
        <Grid item >
        <Card sx={{ maxWidth: 350 }} >
      <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar    sx={{
          backgroundImage: `url(${avatorimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: "10px",
          }}>
              
            </Avatar>
            <div>
              <Typography variant='h6' pt={2}>Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
            </div>
          </Box>
          <Typography variant='subtitle2' px={3}>lorem ipsum dolor sit m amel constectur adioicing elit solut asperires as</Typography>
          <Typography align='right' pr={4} pb={3}>23rd aprill 2022</Typography>
      </Card>
        </Grid>
        <Grid item >
        <Card sx={{ maxWidth: 350 }} >
      <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar    sx={{
          backgroundImage: `url(${avatorimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: "10px",
          }}>
              
            </Avatar>
            <div>
              <Typography variant='h6' pt={2}>Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
            </div>
          </Box>
          <Typography variant='subtitle2' px={3}>lorem ipsum dolor sit m amel constectur adioicing elit solut asperires as</Typography>
          <Typography align='right' pr={4} pb={3}>23rd aprill 2022</Typography>
      </Card>
        </Grid>
        <Grid item >
        <Card sx={{ maxWidth: 350 }} >
      <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar    sx={{
          backgroundImage: `url(${avatorimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: "10px",
          }}>
              
            </Avatar>
            <div>
              <Typography variant='h6' pt={2}>Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
            </div>
          </Box>
          <Typography variant='subtitle2' px={3}>lorem ipsum dolor sit m amel constectur adioicing elit solut asperires as</Typography>
          <Typography align='right' pr={4} pb={3}>23rd aprill 2022</Typography>
      </Card>
        </Grid>
        <Grid item >
        <Card sx={{ maxWidth: 350 }} >
      <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar    sx={{
          backgroundImage: `url(${avatorimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          margin: "10px",
          }}>
              
            </Avatar>
            <div>
              <Typography variant='h6' pt={2}>Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
            </div>
          </Box>
          <Typography variant='subtitle2' px={3}>lorem ipsum dolor sit m amel constectur adioicing elit solut asperires as</Typography>
          <Typography align='right' pr={4} pb={3}>23rd aprill 2022</Typography>
      </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>

  )
}

export default Tastimonials