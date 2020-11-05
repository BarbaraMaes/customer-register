import React from 'react';
import CustomerItem from './CustomerItem';
import {useHistory} from 'react-router-dom';

export default function CustomerList({customers}) {
    const history = useHistory();

    const handleAddCustomer = () => {
        history.push("/customer-form");
    }

    return (
        <div>
            <div className="row justify-content-around">
                <h3>Customer List</h3>
                <button className="btn btn-info" onClick={handleAddCustomer}>Add Customer</button>
            </div>
            <ul className="list-group list-group-flush my-3 col-md-6 offset-3">
                {customers && customers.map(customer => <CustomerItem customer={customer} key={customer.id}/>)}
            </ul>
        </div>
    )
}
