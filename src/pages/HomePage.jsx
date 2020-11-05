import React, {useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import CustomerList from '../components/CustomerList';
import UserInfo from '../components/UserInfo';
import {DataContext} from '../context/dataContext';
import {UserContext} from '../context/userContext';
import UserActions from '../functions/UserActions';


export default function HomePage() {
    const {data} = useContext(DataContext);
    const {user, setUser} = useContext(UserContext);
    const userActions = new UserActions();
   
    useEffect(async () => {
        isLoggedIn();
    }, []) 

    const isLoggedIn = async () => {
        const token = userActions.getToken();
        if(token) {
            const loggedInUser = await userActions.getMe(token);
        setUser({
            user: loggedInUser,
            token: token
        })
        }
    }

    return (
        <div className="container">
            {user && <UserInfo user={user.user}/>}
            <div className="m-5">
                {data && <CustomerList customers={data.results}/>}
            </div>
        </div>
    )
}
