import React from 'react'; 
import styled from 'styled-components'

const StyledTitle = styled.h4`
        color: #feeee1; 
        font-size: 2rem; 
        text-align: center;
    `

const Title = ({children}) => {
    return <StyledTitle>{children}</StyledTitle>
}

export default Title;
