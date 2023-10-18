import React, {Component} from 'react';

function Modal(props) {
    return (
        <div className='modal-wrapper' style={{display: props.display}}>
            <h3 className='modal-name'>{props.name}</h3>
            {
                props.items ?
                props.items.map((item, index) => {
                    return (
                        <div key={index}>
                            <p className='modal-item'><span>{index + 1}</span>{item.title}</p>
                        </div>
                    )
                })
                :
                <p>No items</p>
            }
        </div>
    );
}
export default Modal;