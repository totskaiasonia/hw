import '../App.css';


import UserCard from '../components/UserCard';
import UsersContainer from '../components/UsersContainer';
import { useState } from 'react';
import Modal from '../components/Modal';
import ApiReader from '../controllers/apiReader';
import UserCollection from "../controllers/userCollection.js";


const userCollection = new UserCollection(await ApiReader.get('https://jsonplaceholder.typicode.com/users'));


function HomePage() {
  return (
      <div className='container'>
        <p className='page-title'>System users</p>
        <UsersContainer users={userCollection}></UsersContainer>
      </div>
  );
}

export default HomePage;
