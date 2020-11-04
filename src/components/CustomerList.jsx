import React from 'react';
import CustomerItem from './CustomerItem';

export default function CustomerList({customers}) {
    const handleAddCustomer = () => {
        //modal ? 
    }

    return (
        <div>
            <div className="row justify-content-around">
                <h3>Customer List</h3>
                <button className="btn btn-info" onClick={handleAddCustomer}>Add Customer</button>
            </div>
            <ul className="list-group list-group-flush my-3">
                {customers && customers.map(customer => <CustomerItem customer={customer} key={customer.id}/>)}
            </ul>
        </div>
    )
}
