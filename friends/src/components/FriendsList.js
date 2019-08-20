import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendsList (props) {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    });

    function handleChanges (e) {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});
    };

    function addNewFriend(e){
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res=> setFriends(res.data))
            .catch(err => console.log('error response in attempt to post new friend: ', err.response));
        setNewFriend({
            id: Date.now(),
            name: '',
            age: '',
            email: ''
        })
    };


    useEffect(() => {

        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            // console.log('friends get response: ', res);
            setFriends(res.data);
        })
        .catch(err => console.log("Uh oh! Error displaying friends: ", err.response.status, err.response.data.error));

    }, []);

    return (
        <div>
        <h1>You're in good company, pard'ner</h1>
        {friends.map(friend => (
            <p key={friend.id}>My old pal {friend.name} is {friend.age} years old and I chat to 'em them all the time at {friend.email}.</p>
        ))}
        <br/>
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


export default FriendsList