import React from 'react'; 
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: #343a40;
    width: 100vw; 
    height: 100vh;
    position: absolute; 
    `

const Container = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>
}

export default Container;
