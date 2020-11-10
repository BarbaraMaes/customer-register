import React, {useContext, useEffect, useState} from 'react'; 
import {Route, Redirect} from 'react-router-dom'; 
import {UserContext} from '../context/userContext';

import UserActions from '../functions/UserActions';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [token, setToken] = useState(null)
    const {user, setUser} = useContext(UserContext);
    const userActions = new UserActions();

    useEffect(() => {
        if(!user.token){        
            const fetchedToken = userActions.getToken();
            if(fetchedToken) {
                setUser({
                    ...user, 
                    token: fetchedToken
                })
                setToken(fetchedToken)
            };
        }
    }, [])

    return (
        <Route {...rest} render={props => (
            user.token || token ?
            <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute