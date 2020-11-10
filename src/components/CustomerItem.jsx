import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

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
            <ListItem onClick={handleCustomerDetails}>
                <p>{customer.name}</p>
                <p>{customer.email}</p>
            </ListItem>
            <Line />
        </>
    )
}

const ListItem = styled.li`
    color: #feeee1;
    font-size: 1.1rem;
    display: flex;
    justify-content: space-between;
`

const Line = styled.hr`
    border-color: rgba(165,158,152, 0.6);
    border-style: inset;
    border-width: thin;
`

