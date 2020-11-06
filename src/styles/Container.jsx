import React from 'react'; 
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: #343a40;
    width: 100vw; 
    height: 100vh;
    min-height: 100%;
    display: grid; 
    grid-template-columns: 15% auto 15%;
    grid-template-rows: auto;
    position: fixed;
    overflow: auto;
    `

const Container = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>
}

export default Container;
