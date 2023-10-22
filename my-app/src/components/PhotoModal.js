import React from 'react';

function Modal(props) {
    return (
        <div className='modal-wrapper' style={{display: props.display}}>
            <h3 className='modal-name'>{props.name}</h3>
            <img className='photo-fullsize' src={props.src}/>
        </div>
    );
}
export default Modal;