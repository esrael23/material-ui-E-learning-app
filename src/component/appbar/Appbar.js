import React from 'react'
import {Box,AppBar,Toolbar,Stack, styled, Typography,Button} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Appbar = () => {

  const Styledtoolbar = styled(Toolbar)({
    display:'flex',
    justifyContent: 'space-between',
    background: 'white',
    color: 'black',
    
    
  })
  return (
    <AppBar position={'static'} >
      <Styledtoolbar>
        <Box>
          <Typography variant="h4" color="initial">E-learn</Typography>
        </Box>
        <Box>
          <Stack direction='row' spacing={5}>
            <Typography variant="h6" color="black">why us</Typography>
            <Typography variant="h6" color="black">Sourses</Typography>
            <Typography variant="h6" color="black">Tastimonials</Typography>
            <Typography variant="h6" color="black">Out team</Typography>
            <Typography variant="h6" color="black">Contact Us</Typography>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={2} direction="row" alignItems={'center'}>
          <Button>sign in</Button>
          <Button variant='contained' sx={{borderRadius: '50px',}} >sign up</Button>
          <Brightness4Icon />

          </Stack>

        </Box>
      </Styledtoolbar>
    </AppBar>
  )
}

export default Appbar

