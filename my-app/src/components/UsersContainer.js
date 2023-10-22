import React, {useState} from 'react';
import UserCard from "./UserCard.js";


function UsersContainer(props) {
    const [users, setUsers] = useState(props.userCollection.usersData);

    return (
        <div className='users-container-wrapper'>
            {
                users.map(element => <UserCard key={element.id} name={element.name} username={element.username} id={element.id} userCollection={props.userCollection}></UserCard>)
            }
        </div>
    );
}
export default UsersContainer;