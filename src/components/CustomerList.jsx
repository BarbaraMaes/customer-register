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
            <TitleContainer>
                <Title>Customer List</Title>
                <Button onClick={handleAddCustomer}>Add Customer</Button>
            </TitleContainer>
            <List>
                {customers && customers.map(customer => <CustomerItem customer={customer} key={customer.id}/>)}
            </List>
        </ListContainer>
    )
}

const TitleContainer = styled.div`
    display: flex; 
    justify-content: space-around
`

const ListContainer = styled.div`
    margin: auto;
    margin-top: 5rem;
    justify-self: center; 
    width: 45%; 
`

const List = styled.ul`
    border-radius: 5%; 
    margin: 2rem; 
    padding: 2rem;
    list-style-type: none; 
    overflow: hidden;
    overflow-y: scrollable
`