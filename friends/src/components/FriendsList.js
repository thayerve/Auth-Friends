import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendsList () {
    const [friends, setFriends] = useState([]);

    useEffect(() => {

        axiosWithAuth()
        .get(' http://localhost:5000/api/friends')
        .then(res => {
            // console.log('friends get response: ', res);
            setFriends(...friends, res.data);
        })
        .catch(err => console.log("Uh oh! Error:", err.response.status, err.response.data.error));

    }, []);

    return (
        <div>
        <h1>You're in good company, pard'ner</h1>
        {friends.map(friend => (
            <p key={friend.id}>My pal {friend.name} is {friend.age} years old and I email them all the time at {friend.email}</p>
        ))}
        </div>
    );
    
}


export default FriendsList