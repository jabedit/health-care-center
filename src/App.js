
import './App.css';
import Navbar from './Component/Header/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Pages/Home/Home';
import Departments from './Component/Pages/Department/Departments';
import Footer from './Component/Footer/Footer';
import Dorctor from './Component/Pages/Doctor/Dorctor';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import AuthUseProvider from './context/AuthUseProvers';
import PrivateRoute from './Component/private/PrivateRoute';

import NotFound from './Component/Pages/Notfound/NotFound';
import ServiceDescription from './Component/Pages/ServiceDescrip/ServiceDescription';
import Contact from './Component/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
        <AuthUseProvider>
              <Router>
            <Navbar></Navbar>
              <Switch>
              <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/home">
                  <Home></Home>
                </Route>
                <Route exact path="/departments">
                    <Departments></Departments>
                </Route>
                <PrivateRoute exact  path="/doctor">
                  
                  <Dorctor></Dorctor>
                </PrivateRoute>
                <PrivateRoute exact  path="/contact">
                  
                  <Contact></Contact>
                </PrivateRoute>
                <Route exact  path="/register">
                  <Register></Register>
                </Route>
                <Route exact  path="/login">
                  <Login></Login>
                </Route>
                <PrivateRoute path="/servdescription/:id">
                    <ServiceDescription></ServiceDescription>
                </PrivateRoute>
                <Route path='*'>
                   <NotFound></NotFound>
                </Route>
                
              </Switch>
              <Footer></Footer>
            </Router>
        </AuthUseProvider>
    </div>
  );
}

export default App;
