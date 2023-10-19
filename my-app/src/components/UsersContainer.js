import React, {Component, useEffect, useState} from 'react';
import UserCard from "./UserCard.js";


function UsersContainer(props) {
    const [users, setUsers] = useState(props.users.usersData);

    return (
        <div className='users-container-wrapper'>
            {
                users.map(element => <UserCard key={element.id} name={element.name} username={element.username} id={element.id} userCollection={props.users}></UserCard>)
            }
        </div>
    );
}
export default UsersContainer;