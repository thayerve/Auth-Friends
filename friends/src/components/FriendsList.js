import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

function FriendsList (props) {
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
            <p key={friend.id}>My old pal {friend.name} is {friend.age} years old and I chat to 'em them all the time at {friend.email}.</p>
        ))}
        <br/>
        <AddFriend />
        </div>
    );
    
}


export default FriendsList