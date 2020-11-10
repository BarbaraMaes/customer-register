import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import CustomerList from '../components/CustomerList';
import UserInfo from '../components/UserInfo';
import {DataContext} from '../context/dataContext';
import {UserContext} from '../context/userContext';
import UserActions from '../functions/UserActions';
import CustomerActions from '../functions/CustomerActions';

import Container from '../styles/Container';
import Alert from '../styles/Alert';

export default function HomePage() {
    const location = useLocation();
    const [alert, setAlert] = useState(null);
    const {data, setData} = useContext(DataContext);
    const {user, setUser} = useContext(UserContext);
    const userActions = new UserActions();
    const customerActions = new CustomerActions();

    useEffect(() => {
        if(!user) getUser();
        getData();
        if(location.status){
            if(location.status === 200 || location.status === 204 || location.status === 201) {
                setAlert("success");
            }
            else {
                setAlert("error");
            }
        }
        console.log(alert);
    }, [])

    const getUser = async () => {
        const fetchUser = await userActions.getMe({token: user.token}); 
        setUser({
            token: user.token,
            user: fetchUser 
        })
    };
    
    const getData = async() => {
        const response = await customerActions.getCustomers({token: user.token}); 
        setData(response);
    } 

    return (
        <Container>
            {user && <UserInfo user={user.user}/>}
            <div>
                {alert === "success" && <Alert success>Operation succesfull</Alert>}
                {alert === "error" && <Alert error>Something went wrong</Alert>}
                {data && <CustomerList customers={data.results}/>}
            </div>
        </Container>
    )
}
