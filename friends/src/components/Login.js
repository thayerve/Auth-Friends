import React, { useState } from 'react';
import axios from 'axios';

export default function Login () {
    const [creds, setCreds] = useState({});
    
    function handleChange(e){
        setCreds({...creds, [e.target.name]: e.target.value })
    }

    function login(e){
        e.preventDefault();
        axios
            .post(' http://localhost:5000/api/login', creds)
            .then(res => console.log(res))
            .catch(err => console.log(err.response));
    }

    
    return (
        <div>
            <h1>Hey there, stranger! This here app is for friends only!</h1>
            <h3>You oughtta log in right here if'n ya know what's good for ya</h3> 
                
            
            <form onSubmit={login}>
                <label for="username">Username: 
                <br/>
                <input
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleChange}
                />
                </label>
                <br/>
                <label for="password">Password: 
                <br/>
                <input 
                    type="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChange}
                />
                </label>
                <br/>
                <button>I is who I say I is</button>
            </form>
        </div>
    );
    

}