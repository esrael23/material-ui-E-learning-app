import React, { useState } from 'react'
import {Box,Menu,MenuItem,AppBar,Toolbar,Stack, styled, Typography,Button, IconButton, Switch} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = ({check, change}) => {

  const Styledtoolbar = styled(Toolbar)({
    display:'flex',
    justifyContent: 'space-between',
    background: 'white',
    color: 'black',
    
    
  })
  const Menuitem = [
    {Name:'Home',Link:'/'},
    {Name:'why us',Link:'#'},
    {Name:'Sourses',Link:'#'},
    {Name:'Tastimonials',Link:'#'},
    {Name:'Out team',Link:'#'},
    {Name:'Contact Us',Link:'#'}]

    const [open , setopen] = useState(false)

  return (
    <AppBar position={'static'} >
      <Styledtoolbar>
        <Box display={'flex'} alignItems={'center'} gap={3}>
          <MenuIcon
          onClick = {()=>setopen(!open)}
           sx={{display: {xs: 'block', sm: 'block', md:'block',lg:'none'}}} />
          <Typography variant="h4" color="initial">E-learn</Typography>
        </Box>
        <Box>
          <Stack direction='row' spacing={5} sx={{display: {xs: 'none',sm: "none", md: 'none', lg:'flex'}}}>
            {Menuitem.map((item)=>(
              <Typography  sx={{ cursor: 'pointer'}}>{item.Name}</Typography>
            ))}
            {/* {Menuitem.map((item)=>(
              <Typography variant="h6" color="black">{item.Name}</Typography>
            ))} */}
            
            
          </Stack>
        </Box>
        <Box>
          <Stack spacing={2} direction="row" alignItems={'center'}>
          <Button>sign in</Button>
          <Button variant='contained' sx={{borderRadius: '50px',}} >sign up</Button>
           <IconButton
           onClick={change}

            // onChange = {}
            //  checked={check}
             
            >
          {check ===true ? <Brightness7Icon /> : <Brightness4Icon />}

          </IconButton> 
          {/* dark mode icon */}
          <Switch defaultChecked  
          color='default'
          onChange = {change}
          
          />
          <Switch
          defaultChecked
          color='default'
          inputProps={{'aria-label' : 'checkbox with default color'}}
           onChange = {change}
            checked={check} />

          {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton> */}

          </Stack>

        </Box>
      </Styledtoolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose= {()=>setopen(!open)}
        open={open}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width: 300, height: "50vh"}}>
          {Menuitem.map((item)=>(
        <MenuItem>{item.Name}</MenuItem>

          ))}
        </Box>
        
      </Menu>

    </AppBar>
  )
}

export default Appbar

