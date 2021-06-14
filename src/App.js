import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';

import AddProduct from './Components/AddProduct/AddProduct';
import Add from './Components/Add/Add';
import LogIn from './Components/LogIn/LogIn';
import OrderPlace from "./Components/OrderPlace/OrdersPlace";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/CheckOut/CheckOut";
import Submit from "./Components/Submit/Submit";


export const UserContext=createContext();





function App() {
  const [LoggedInUser,setLoggedInUser]=useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[LoggedInUser,setLoggedInUser]}>
      <h3 style={{color:"WindowFrame"}}> name:{LoggedInUser.name}</h3>
      <Router>
        <NavBar/>  
        <Switch>
         <Route path="/home">
             <Home />
          </Route>
         
          <Route exact path="/">
            <Home />
          </Route>
          
          
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/login">
            <LogIn/>
            
          </Route>
          
          <PrivateRoute path="/checkout/:id">
            <CheckOut/>

          </PrivateRoute>

          <PrivateRoute path="/order"  >
           <CheckOut/>
            
          </PrivateRoute>
         
          
          
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      
    </Router>

    </UserContext.Provider>

    </div>
  );
}

export default App;
