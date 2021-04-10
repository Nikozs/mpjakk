import React from 'react';
import './App.css';
// import MediaTable from './components/MediaTable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/single" component={Single} />
    </Switch>
  </Router>
);

export default App;
