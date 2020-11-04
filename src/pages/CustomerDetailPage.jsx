import React, {useState, useEffect, useContext} from 'react'; 
import {useLocation} from 'react-router-dom';

export default function CustomerDetailPage(props) {
    const [customer, setCustomer] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if(location){
            setCustomer(location.data.customer);
            console.log(customer);
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
    return (
        <div className="container">
            <h1>DetailPage</h1>
        </div>
    )
}
