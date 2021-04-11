import React from 'react';
import './App.css';
// import MediaTable from './components/MediaTable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import { MediaProvider } from './contexts/MediaContext';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <MediaProvider>
      <Container maxWidth="md">
        <Nav />
        <main style={{ marginTop: 180 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/logout" component={Logout} />
            <Route path="/profile" component={Profile} />
            <Route path="/single" component={Single} />
          </Switch>
        </main>
      </Container>
    </MediaProvider>
  </Router>
);

export default App;
