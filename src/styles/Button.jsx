import React from 'react'; 
import styled from 'styled-components'

const StyledButton = styled.button`

    `

const Button = ({children}) => {
    return <StyledButton>{children}</StyledButton>
}

export default Button;
