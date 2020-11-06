import React from 'react'; 
import styled from 'styled-components'

const StyledButton = styled.button`
        background-color: #c7596a; 
        border: 1px solid #c7596a; 
        color: #feeee1; 
        padding: 0.5rem 1rem; 
        text-align: center; 
        text-decoration: none; 
        font-size: 1.2rem;
    `

const Button = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button;
