import React, {useContext, useState, useEffect} from 'react';
import UserActions from '../functions/UserActions';
import {UserContext} from '../context/userContext';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

import Container from '../styles/Container';
import Title from '../styles/Title';
import Button from '../styles/Button';

export default function LoginPage() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const userActions = new UserActions();
    const {setUser} = useContext(UserContext);
    const history = useHistory();
    
    const handleLogin = async () => {
        const token = await userActions.login({
            email: email, 
            password: password
        });
        const user = await userActions.getMe({token: token.token});
        setUser({
            user: user, 
            token: token.token
        });
        await userActions.setToken(token.token);
        history.push({
            pathname: "/home"
        });
    }


    return (
        <Container>
            <Card>
                <Title>Login</Title>
                <div>
                        <div className="form-group">
                            <label htmlFor="email" className="text-white">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-white">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <Button onClick={handleLogin}>Login</Button>
                </div>
            </Card>
        </Container>
    )
}

const Card = styled.div`
    margin: auto;
    margin-top: 5rem;
    justify-self: center; 
    width: 40%; 
    height: 40%;
    grid-column: 1/ span 3;
    margin: 2rem; 
    padding: 2rem;
`
/*border: 2px solid #ccc;
    border-radius: 5%; */