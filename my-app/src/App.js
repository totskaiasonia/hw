import logo from './logo.svg';
import './App.css';


import UserCard from './components/UserCard';
import UsersContainer from './components/UsersContainer';
import { useState } from 'react';
import Modal from './components/Modal';
import ApiReader from './controllers/apiReader';
import UserCollection from "./controllers/userCollection.js";


const userCollection = new UserCollection(await ApiReader.get('https://jsonplaceholder.typicode.com/users'));


function App() {
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
        <p className='page-title'>System users</p>
        <UsersContainer openModal={openModal} users={userCollection}></UsersContainer>
        <Modal display={open ? 'block' : 'none'} name={modalName} items={modalData}></Modal>
        <div style={{display: open ? 'block' : 'none'}} onClick={() => setOpen(false)} className='backdrop'></div>
      </div>
  );
}

export default App;
