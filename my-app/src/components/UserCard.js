import React from 'react';
import Button from './Button.js';

function UserCard(props) {
    return (
        <div className='card-wrapper'>
            <div className='user-photo'></div>
            <h3 className='user-name'>{props.name}</h3>
            <h4 className='user-username'>{props.username}</h4>
            <Button id={props.id} userCollection={props.userCollection} name={props.name}></Button>
        </div>
    );
}
export default UserCard;