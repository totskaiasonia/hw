import React, {useState} from 'react';
import MinPhoto from './MinPhoto';



function MinPhotosContainer(props) {
    const [photos, setPhotos] = useState(props.photos);
    return (
        <div className='photos-container-wrapper'>
            {
                photos.map(element => <MinPhoto key={element.id} thumbnailSrc={element.thumbnailUrl} src={element.url} title={element.title} openPhoto={props.openPhoto}></MinPhoto>)
            }
        </div>
    );
}
export default MinPhotosContainer;