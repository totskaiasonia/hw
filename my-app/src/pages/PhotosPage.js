import '../App.css';

import { useState } from 'react';
import Modal from '../components/PhotoModal';
import { useLocation, useNavigate } from 'react-router-dom';
import MinPhotosContainer from '../components/MinPhotosContainer';



function PhotosPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [albumName, setAlbumname] = useState(location.state.albumName);

    const photos = location.state.photos;

    const [open, setOpen] = useState(false);
    const [modalName, setModalName] = useState('');
    const [modalPhotoSrc, setModalPhotoSrc] = useState('');

    const openModal = async (src, title) => {
        setOpen(true);
        setModalName(title);
        setModalPhotoSrc(src);
    }

    const back = () => {
        navigate(-1);
    }
    
    return (
        <div className='container'>
            <p className='page-title'>Album - {albumName}</p>
            <div className='back-btn' onClick={() => back()}>&lt;</div>
            {
                photos.length > 0
                ?
                <MinPhotosContainer photos={photos} openPhoto={openModal}></MinPhotosContainer>
                :
                <p>No photos</p>
            }
            <Modal display={open ? 'block' : 'none'} name={modalName} src={modalPhotoSrc}></Modal>
            <div style={{display: open ? 'block' : 'none'}} onClick={() => setOpen(false)} className='backdrop'></div>
        </div>
    );
}

export default PhotosPage;
