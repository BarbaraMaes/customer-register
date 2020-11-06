import React, {useContext, useEffect} from 'react';
import CustomerList from '../components/CustomerList';
import UserInfo from '../components/UserInfo';
import {DataContext} from '../context/dataContext';
import {UserContext} from '../context/userContext';
import UserActions from '../functions/UserActions';
import CustomerActions from '../functions/CustomerActions';

import Container from '../styles/Container';

export default function HomePage() {
    const {data, setData} = useContext(DataContext);
    const {user, setUser} = useContext(UserContext);
    const userActions = new UserActions();
    const customerActions = new CustomerActions();

    useEffect(() => {
        if(!user) getUser();
        getData();
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
                {data && <CustomerList customers={data.results}/>}
            </div>
        </Container>
    )
}
