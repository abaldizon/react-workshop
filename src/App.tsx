import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
