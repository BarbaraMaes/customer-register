import React, {useContext, useEffect} from 'react';
import CustomerList from '../components/CustomerList';
import UserInfo from '../components/UserInfo';
import {DataContext} from '../context/dataContext';
import {UserContext} from '../context/userContext';
import CustomerActions from '../functions/CustomerActions';

export default function HomePage() {
    const {data, setData} = useContext(DataContext);
    const {user} = useContext(UserContext);
    const customerActions = new CustomerActions();

    const getData = async () => {
        console.log(user.token)
        const data = await customerActions.getCustomers({token : user.token});
        setData(data);
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, []) 

    /* 
    Logged in customer
        email, firstname, lastname
    List of customers 
    Add new customer
        {
            name, 
            organisationNr, 
            vatNr, 
            reference, 
            paymentTerm: required, 
            website, 
            email, 
            phoneNumber

        }
    */
    return (
        <div className="container">
            {user && <UserInfo user={user.user}/>}
            <div className="m-5">
                {data && <CustomerList customers={data.results}/>}
            </div>
        </div>
    )
}
