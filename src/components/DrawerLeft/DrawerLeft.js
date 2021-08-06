import React, { useState } from 'react';

import { ContactContext } from '../../contexts/ContactContext';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: 64,
    zIndex: 1000
  },
  drawerHeader: {
    display: 'block',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function DrawerLeft(props) {

  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button key={'Contacts'}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary={'Show all contacts'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>{openDrawer ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
            <ListItemText primary="Tags" />
          </ListItem>
          <Collapse in={openDrawer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
             <ContactContext.Consumer>
                {({ tagsList, setActiveTag, activeTag }) => (
                  tagsList.map(tag => (
                    <ListItem key={tag} button onClick={()=> {setActiveTag(tag)}} selected={activeTag===tag}>
                      <ListItemIcon>
                        <LocalOfferIcon />
                      </ListItemIcon>
                      <ListItemText primary={tag} />
                    </ListItem>
                  ))
                )
                }
            </ContactContext.Consumer>              
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItem button key={'Trash'}>
            <ListItemIcon><DeleteIcon /></ListItemIcon>
            <ListItemText primary={'Trash'} />
          </ListItem>
        </List>
   
      </Drawer>
    </div>
  );
}