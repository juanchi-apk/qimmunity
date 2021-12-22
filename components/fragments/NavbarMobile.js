import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link as Muilink} from '@mui/material';
import NextLink from "next/link";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  background: 'linear-gradient(90deg, rgba(135,66,186,1) 0%, rgba(255,53,145,0.9830810375908176) 100%, rgba(0,212,255,1) 100%)',  
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));





export default function NavbarMovile({navbar}) {

  const menu = [];
  navbar.map(item=> menu.push(item.title));
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem button key="HOME">
              <NextLink href="/">
              <Muilink>
              <ListItemIcon>
                {<MailIcon />}
              </ListItemIcon>
              <ListItemText primary="HOME" />
              </Muilink>
              </NextLink>
            </ListItem>
          {menu.map((text, index) => {
            return(
            <ListItem button key={text.toUpperCase()}>
              <NextLink href={`/[${text}]`}>
              <Muilink>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.toUpperCase()} />
              </Muilink>
              </NextLink>
            </ListItem>
          )
        })}
          <ListItem button key="BLOG">
          <NextLink href="/blog">
          <Muilink>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="BLOG" />
          </Muilink>
          </NextLink>
        </ListItem>
         
          
        </List>
       
      </Drawer>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6 " noWrap sx={{ flexGrow: 1 }} component="div">
           QIMMUNITY
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="starts"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> 
    </Box>

  );
}