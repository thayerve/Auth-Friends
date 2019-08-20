import React, { useState } from 'react';
import axios from 'axios';

export default function AddFriend(){
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: null,
        email: ''
    });

    function handleChanges (e) {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});
    };

    function addNewFriend(e){
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res=> console.log('add new friend post res: ', res))
            .catch(err => console.log('error response in attempt to post new friend: ', err.response));

    };


    return(
        <div>
            <h2>Hey! Who d'ya think you are??</h2>
            <form onSubmit={addNewFriend}>
                <label>Yer name
                    <br/>
                    <input type='text' name='name' placeholder='Huckleberry' value={newFriend.name} onChange={handleChanges}></input>
                </label>
                <br/>
                <label>Just how old are ya?
                    <br/>
                    <input type='number' name='age' value={newFriend.age} placeholder='years of age' onChange={handleChanges}></input>
                </label>
                <br/>
                <label>How can I reach ya, electronically?
                    <br/>
                    <input type='text' name='email' value={newFriend.email} placeholder='email address' onChange={handleChanges}></input>
                </label>
                <br/>
                <button>Join the Legion of Friends</button>
            </form>
        </div>

    );
}