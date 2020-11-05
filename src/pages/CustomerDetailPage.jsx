import React, {useState, useEffect, useContext} from 'react'; 
import {useLocation, useHistory} from 'react-router-dom';
import CustomerActions from '../functions/CustomerActions';
import {UserContext} from '../context/userContext';
import {DataContext} from '../context/dataContext';

import Container from '../styles/Container';

export default function CustomerDetailPage(props) {
    const [customer, setCustomer] = useState(null);
    const {user} = useContext(UserContext);
    const {setData} = useContext(DataContext);
    const location = useLocation();
    const history = useHistory();
    const customerActions = new CustomerActions();

    useEffect(() => {
        if(location.data.customer){
            setCustomer(location.data.customer);
        }
    }, [])
    /* 
    Visa följande information på Detaljvy för en specifik kund
    name,
    organisationNr,
    vatNr,
    reference,
    paymentTerm,
    website,
    email,
    phoneNumber
    */ 
    const handleDeleteCustomer = async () => {
        await customerActions.deleteCustomer({token: user.token, id: customer.id}); 
        const data = await customerActions.getCustomers({token: user.token});
        setData(data);
        history.push("/home");
    }

    const handleEditCustomer = async () => {
        history.push({
            pathname: "/customer-form", 
            data: {customer: customer}
        });
    }

    return (
        <div className="container">
            <h1>DetailPage</h1>
            {customer && <div className="row">
                <p className="lead">{customer.name} </p>
                <p className="lead">{customer.organisationNr} </p>
                <p className="lead">{customer.vatNr} </p>
                <p className="lead">{customer.reference} </p>
                <p className="lead">{customer.paymentTerm} </p>
                <p className="lead">{customer.website} </p>
                <p className="lead">{customer.email} </p>
                <p className="lead">{customer.phoneNumber} </p>
            </div>}
            <button className="btn btn-danger" onClick={handleDeleteCustomer}>Delete Customer</button>
            <button className="btn btn-info" onClick={handleEditCustomer}>Edit Customer</button>
        </div>
    )
}
