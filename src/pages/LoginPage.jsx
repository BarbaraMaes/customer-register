import React, {useContext, useState} from 'react';
import UserActions from '../functions/UserActions';
import {UserContext} from '../context/userContext';
import {useHistory} from "react-router-dom";

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
        const user = await userActions.getMe(token.token);
        setUser({
            user: user, 
            token: token.token
        });
        history.push({
            pathname: "/home"
        });
    }


    return (
        <div className="container">
            <div className="row justify-content-center m-3">
                <div className="card col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
