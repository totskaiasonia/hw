import React from 'react';
import { useNavigate } from "react-router-dom";




function Button(props) {
    const navigate = useNavigate();
    
    const openGallery = async () => {
        const albums = await props.userCollection.getAlbums(props.id);
        navigate(`/albums/${props.id}`, {state: {
            name: props.name,
            userCollection: props.userCollection,
            albums: albums,
        }});
    }
    return (
        <button className='show-gallery-btn' onClick={() => openGallery()}>Show gallery</button>
    );
}
export default Button;