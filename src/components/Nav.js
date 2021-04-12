/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, makeStyles, MenuItem, IconButton, Menu,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import { MediaContext } from '../contexts/MediaContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [user] = useContext(MediaContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </Typography>
          {user
              && (
              <>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: 'none' }} to="/Profile">
                      <PersonIcon style={{ fontSize: 'small' }} />
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: 'none' }} to="/logout">
                      <ExitToAppIcon style={{ fontSize: 'small' }} />
                      Logout
                    </Link>
                  </MenuItem>
                </Menu>
              </>
              )}
          {!user
              && (
              <>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white', fontSize: 'medium' }}>
                  <VpnKeyRoundedIcon style={{ fontSize: 'medium' }} />
                  Sign in
                </Link>
              </>
              )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
