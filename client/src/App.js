import React ,{Fragment}from 'react';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactState from './components/context/contact/ContactState'
import AuthState from './components/context/auth/AuthState'
import AlertState from './components/context/alert/AlertState'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts'
import setAuthToken from './components/utils/setAuthToken'
import PrivateRoute from './components/routing/PrivateRoute'
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

 const App = () => {
  return (
    <AuthState>
    <ContactState>
    <AlertState>
    <Router>
      <Fragment>
        <Navbar/>
        <div className="Container">
          <Alerts/>
          <Switch>
            <PrivateRoute exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
          </Switch>  
        </div>
      </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
