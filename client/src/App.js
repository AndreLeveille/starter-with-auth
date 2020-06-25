import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import { Container } from 'semantic-ui-react';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import YourPage from './components/YourPage'
// import Friends from './components/Friends'



function App() {
  return (
    <>
      <Navbar/>
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/" component={YourPage} />
            {/* <ProtectedRoute exact path="/" component={Friends} /> */}
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Container>
      </FetchUser>
    </>
 
  );
}

export default App;
