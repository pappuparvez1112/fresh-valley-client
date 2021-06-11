import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';

import AddProduct from './Components/AddProduct/AddProduct';
import Add from './Components/Add/Add';


function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>  
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      
    </Router>

    </div>
  );
}

export default App;
