import '../App.css';


import UsersContainer from '../components/UsersContainer';
import ApiReader from '../controllers/apiReader';
import UserCollection from "../controllers/userCollection.js";


const userCollection = new UserCollection(await ApiReader.get('https://jsonplaceholder.typicode.com/users'));


function HomePage() {
  return (
      <div className='container'>
        <p className='page-title'>System users</p>
        <UsersContainer userCollection={userCollection}></UsersContainer>
      </div>
  );
}

export default HomePage;
