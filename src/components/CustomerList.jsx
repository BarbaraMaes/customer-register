import React from 'react';
import CustomerItem from './CustomerItem';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import Button from '../styles/Button';
import Title from '../styles/Title';

export default function CustomerList({customers}) {
    const history = useHistory();

    const handleAddCustomer = () => {
        history.push("/customer-form");
    }

    return (
        <ListContainer>
            <div>
                <Title>Customer List</Title>
                <Button onClick={handleAddCustomer}>Add Customer</Button>
            </div>
            <List>
                {customers && customers.map(customer => <CustomerItem customer={customer} key={customer.id}/>)}
            </List>
        </ListContainer>
    )
}

const ListContainer = styled.div`
    margin: auto;
    margin-top: 5rem;
    justify-self: center; 
    width: 60%; 

`

const List = styled.ul`
    background: #ccc;
    border: 2px solid #ccc;
    border-radius: 5%; 
    list-style-type: none; 
    margin: 2rem; 
    padding: 2rem
`