import React from 'react';

import { Route } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Drawer, List, CssBaseline, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import ListItemLink from './components/ListItemLink';

import Home from './components/Home';
import Orders from './components/Orders';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Smart Cafe Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItemLink to="/" primary="Početna" icon={<HomeIcon />} />
            <ListItemLink to="/orders" primary="Narudžbine" icon={<FastfoodIcon />} />
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Route exact path="/" component={Home}/>
        <Route path="/orders" component={Orders}/>
      </main>
    </div>
  );
}

export default App;
