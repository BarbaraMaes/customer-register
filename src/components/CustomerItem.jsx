import React from 'react';
import {useHistory} from 'react-router-dom';

export default function CustomerItem({customer}) {
    const history = useHistory();

    const handleCustomerDetails = () => {
        history.push({
            pathname:"/customer", 
            data: {customer: customer}
        })
    }

    return (
        <>
            <li onClick={handleCustomerDetails} className="list-group-item">{customer.name}</li>
        </>
    )
}
