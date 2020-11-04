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

    /*function handleLogin() {
        userActions.login(email, password)
        .then(res => {
            console.log(res);
            res.json()
        })
        .then(data => {
            console.log(data);
          //setToken(data.token)
          //userKit.setToken(data.token)
        }).catch(err => console.log(err));
      }*/

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container">
            <div className="row justify-content-center m-3">
                <div className="card col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={handleEmailChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" onChange={handlePasswordChange}/>
                            </div>
                            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
