import React, { useState } from 'react';
import axios from 'axios';
import { createBrotliDecompress } from 'zlib';

function login () => {
    const [creds, setCreds] = useState({});
    
    function handleChange(e){
        setCreds({...creds, [e.target.name]: e.target.value })
    }

    function login(e){
        e.preventDefault();
        axios
            .post('endpoint', creds)
            .then(res => console.log(res))
            .catch(err => console.log(err.response));
    }

    
    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
    

}