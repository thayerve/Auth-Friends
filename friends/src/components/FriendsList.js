import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendsList () {
    const [friends, setFriends] = useState([]);

    useEffect(() => {

        axiosWithAuth()
        .get(' http://localhost:5000/api/friends')
        .then(res => {
            console.log('friends get response: ', res);
            // setFriends(...friends, res.data)
        })
        .catch(err => console.log("Uh oh! Error:", err.response.status, err.response.data.error));

    })

    return(
        <h1>A list of friends will go here!</h1>
    )
    
}


export default FriendsList