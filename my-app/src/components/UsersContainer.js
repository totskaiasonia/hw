import React, {Component, useEffect, useState} from 'react';
import UserCard from "./UserCard.js";


function UsersContainer(props) {
    console.log(props.users);
    const [users, setUsers] = useState(props.users.usersData);

    return (
        <div className='users-container-wrapper'>
            {
                users.map(element => <UserCard key={element.id} name={element.name} username={element.username} id={element.id} openGallery={props.openModal}></UserCard>)
            }
        </div>
    );
}
export default UsersContainer;