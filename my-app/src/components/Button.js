import React, {Component} from 'react';
import Modal from './Modal.js'

function Button(props) {
    return (
        <button className='show-gallery-btn' onClick={props.showGalleryHandler}>Show gallery</button>
    );
}
export default Button;