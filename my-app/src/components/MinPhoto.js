import React from 'react';


function MinPhoto(props) {
    return (
        <button className='open-photo-btn' onClick={() => props.openPhoto(props.src, props.title)}>
            <img src={props.thumbnailSrc}/>
        </button>
    );
}
export default MinPhoto;