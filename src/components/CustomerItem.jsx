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
            <ListItem onClick={handleCustomerDetails}>{customer.name} {customer.email}</ListItem>
            <hr />
        </>
    )
}

const ListItem = styled.li`
    color: #c7596a; 
    font-weight: bold; 
    font-size: 1.3rem;
    display: flex;
    justify-items: space-around;
`
