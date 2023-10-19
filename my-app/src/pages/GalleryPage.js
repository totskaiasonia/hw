
import '../App.css';


import UserCard from '../components/UserCard';
import UsersContainer from '../components/UsersContainer';
import { useState } from 'react';
import Modal from '../components/Modal';
import ApiReader from '../controllers/apiReader';
import UserCollection from "../controllers/userCollection.js";
import { useParams } from 'react-router-dom';



function GalleryPage(props) {
    const userCollection = props.userCollection;
    const {id} = useParams();
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [modalName, setModalName] = useState('');

    const openModal = async (id, name) => {
        setOpen(true);
        setModalData(await userCollection.getAlbums(id));
        setModalName(name);
    }
    return (
        <div className='container'>
            <p className='page-title'>User's gallery</p>

            {/* <Modal display={open ? 'block' : 'none'} name={modalName} items={modalData}></Modal>
            <div style={{display: open ? 'block' : 'none'}} onClick={() => setOpen(false)} className='backdrop'></div> */}
        </div>
    );
}

export default GalleryPage;
