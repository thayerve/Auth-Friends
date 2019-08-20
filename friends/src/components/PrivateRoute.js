import React from 'react';
import { Route, Redirect } from 'react-router';

// has to have the same props as <Route>
export default function PrivateRoute({ component: Component, ...rest }){
    return (
        <Route 
            {...rest} 
            render={props => 
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            } 
        />
    );
}