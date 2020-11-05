import React from 'react';
import styled from 'styled-components';

export default function UserInfo({user}) {

    const StyledCard = styled.div`
        background: none;
        border: 2px solid #ccc; 
        border-radius: 1rem; 
        padding: 1rem; 
        margin: 1rem;
        color: white; 
    `

    return (
        <div className="row justify-content-center m-3">
            <StyledCard>
                <div>
                    <h5>Logged in as: {user.firstName} {user.lastName}</h5>
                    <h6>{user.email}</h6>
                </div>
            </StyledCard>
        </div>
    )
}
