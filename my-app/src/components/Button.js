import React, {Component} from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';

import { useNavigate } from "react-router-dom";




function Button(props) {
    const navigate = useNavigate();
    const openGallery = () => {
        console.log("HRERERE", props.userCollection);
        navigate(`/gallery/${props.id}`, {userCollection: props.userCollection});
    }
    return (
        <button className='show-gallery-btn' onClick={() => openGallery()}>Show gallery</button>
    );
}
export default Button;