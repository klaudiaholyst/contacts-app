import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
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
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


import ListSubheader from '@material-ui/core/ListSubheader';

import Table from '../Table/Table';

import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import Button from '../../components/Button/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },

// }));

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

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button key={'Contacts'}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary={'Contacts'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
            <ListItemText primary="Tags" />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button >
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Clients" />
              </ListItem>
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
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.open,
        })}
      >
        <div className={classes.drawerHeader} />
          <Button/>
          <Table/>      
      </main> */}
    </div>
  );
}