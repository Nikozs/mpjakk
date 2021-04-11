import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar,
} from '@material-ui/core';
import { MediaContext } from '../contexts/MediaContext';
// import { AccountCircle } from '@material-ui/icons';

const Nav = () => {
  const [user] = useContext(MediaContext);
  return (
    <>
      <AppBar>
        <Toolbar>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {user
              && (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
              )}
              {!user
              && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
              )}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
