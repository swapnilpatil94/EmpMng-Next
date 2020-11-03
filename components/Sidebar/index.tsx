import React, { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const router = useRouter()

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(Number);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  // const isActive=(path:String,index:Number)=>{
  //   // alert(path)
  //   // if(router.pathname===path){
  //   //  return setSelectedIndex(index);
  //   //   alert(path)
  //   // }

  // }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
       <div className={classes.toolbar}>
         <MenuIcon  onClick={handleDrawerOpen} />
       </div> 
       
        <Divider />
        <List >
            <ListItem 
            button
            selected={selectedIndex === 1}
            onClick={(event)=>{
              let path= '/admin/dashboard'
                router.push(path);
                setSelectedIndex(1);

                // if(router.pathname===path){
                //    setSelectedIndex(1);
                //  }
                // isActive(path,1);
            }}
            >
              <ListItemIcon> <DashboardIcon /></ListItemIcon>
              <ListItemText primary='Dashboard' />

            </ListItem>
        </List>
        <List>
            <ListItem 
            button
            selected={selectedIndex === 2}
            onClick={(e)=>{
              let path = '/admin/dashboard/user';
                router.push(path);
                setSelectedIndex(2)
                // isActive(path,2);
                // if(router.pathname===path){
                //    setSelectedIndex(2);
                //  }
            }}
            >
              <ListItemIcon> <PersonIcon /></ListItemIcon>
              <ListItemText primary='User Profile' />

            </ListItem>
        </List>
        <List>
            <ListItem 
            button
            selected={selectedIndex === 3}
            onClick={(e)=>{
              let path ='/admin/dashboard/maps';
              router.push(path);
              setSelectedIndex(3);
              // // isActive(path,3);
              // if(router.pathname===path){
              //  setSelectedIndex(3);
              //  }
            }}
            >
              <ListItemIcon> <LocationOnIcon /></ListItemIcon>
              <ListItemText primary='Maps' />

            </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
