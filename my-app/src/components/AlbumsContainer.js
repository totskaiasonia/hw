import React, {useState} from 'react';
import Album from './Album.js';


function AlbumsContainer(props) {
    const [albums, setAlbums] = useState(props.albums);
    return (
        <div className='albums-container-wrapper'>
            {
                albums.map(element => <Album key={element.id} userCollection={props.userCollection} albumName={element.title} id={element.id}></Album>)
            }
        </div>
    );
}
export default AlbumsContainer;