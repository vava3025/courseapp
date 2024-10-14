import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{background:'#257180'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }} 
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           COURSE APP
        </Typography>
        <Link to={'/home'}><Button sx={{color:' #4CAF50'}} style={{backgroundColor:"white",marginLeft:"10px"}} color="inherit">Course</Button></Link>
        <Link to={'/add'}><Button sx={{color:' #4CAF50'}} style={{backgroundColor:"white",marginLeft:"10px"}}color="inherit">Add</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar