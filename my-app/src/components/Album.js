import React, {useState} from 'react';

import { useNavigate } from "react-router-dom";

function Album(props) {
    const [userCollection, setUserCollection] = useState(props.userCollection);
    const navigate = useNavigate();

    const openAlbum = async (id) => {
        const photos = await userCollection.getPhotos(id);
        navigate(`/photos/${id}`, {state: {
            albumName: props.albumName,
            userCollection: props.userCollection,
            photos: photos,
        }});
    }
    return (
        <div className='album' onClick={() => openAlbum(props.id)}>
            <p className='album-name'>{props.albumName}</p>
        </div>
    );
}
export default Album;