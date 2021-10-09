import React from 'react';
import {  AppBar, Toolbar, Typography,  Link} from '@mui/material';
import { withStyles } from '@mui/styles'


const StyledNavbar = withStyles({
  root: {

    background: 'linear-gradient(90deg, rgba(135,66,186,1) 0%, rgba(255,53,145,0.9830810375908176) 100%, rgba(0,212,255,1) 100%)'
  }



})(AppBar)


const StyledLink = withStyles({
  root: {
    color: '#fcfcfc',
    margin:"20px",

    '&:hover' :{  
      color: "#42f934",
      textDecoration:"none",
    },     

  },
  label: {
    textTransform: 'capitalize',
  
  },
})(Link);

 const NavbarDesktop = ()=>{

 return(

      <div>
      <StyledNavbar>
        <Toolbar>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" ></Typography>
            <Typography variant = "subheading" color="inherit" >
              <StyledLink href="/" >QIMMUNITY</StyledLink>
            </Typography>
            <Typography variant = "subheading" color="inherit" >
              <StyledLink href="/news" >TENDENCIAS</StyledLink>
            </Typography>
            <Typography variant = "subheading" color="inherit" >
              <StyledLink href="/curso" >DATITA</StyledLink>
            </Typography>
          </Toolbar>
      </StyledNavbar  >
      </div>
 )
    }

export default NavbarDesktop