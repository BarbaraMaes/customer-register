import React, { useEffect, useState } from 'react'; 
import styled, {css} from 'styled-components'

const StyledAlert = styled.div`
        padding: 1.3rem; 
        margin: 1rem;
        text-align: center; 
        font-size: 1.2rem;
        width: 70%;
        height: fit-content; 
        justify-self: center;

        ${props => props.success && css`
            background-color: rgba(107,189,110, 0.7); 
            border: 1px solid rgba(107,189,110, 0.7); 
            color: #feeee1; 
        `}

        ${props => props.error && css` 
            background-color: rgba(244,67,54, 0.7); 
            border: 1px solid rgba(244,67,54, 0.7); 
            color: #feeee1; 
        `}

    `

const Alert = (props) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false); 
        }, 4000)
    }, [])

    return (
        <>
        {show && <div className="row justify-content-center">
        <StyledAlert {...props}>
            {props.children}
            </StyledAlert>
        </div>}
        </>)
}

export default Alert;