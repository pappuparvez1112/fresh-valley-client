import React from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';
import { useContext } from 'react';


const PrivateRoute = ({children,...rest}) => {
    
    //  const user=JSON.parse(localStorage.getItem('')) || {};
    const [LoggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          LoggedInUser?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
   

export default PrivateRoute;