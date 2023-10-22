import '../App.css';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AlbumsContainer from '../components/AlbumsContainer';
import UserCollection from '../controllers/userCollection';



function AlbumsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState(location.state.name);
    const [userCollection, setUserCollection] = useState(new UserCollection(location.state.usersData));
    const albums = location.state.albums;

    const back = () => {
        navigate(-1);
    }
    
    return (
        <div className='container'>
            <p className='page-title'>{username}'s albums</p>
            <div className='back-btn' onClick={() => back()}>&lt;</div>
            {
                albums.length > 0 
                ?
                <AlbumsContainer userCollection={userCollection} albums={albums}></AlbumsContainer>
                :
                <p>No albums</p>
            }
        </div>
    );
}

export default AlbumsPage;
