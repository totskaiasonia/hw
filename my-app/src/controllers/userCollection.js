import ApiReader from './apiReader.js';

class UserCollection {
    constructor(usersData) {
        this.usersData = usersData;
    }

    async getAlbums(id) {
        return await ApiReader.get(`https://jsonplaceholder.typicode.com/albums?userId${id}`);
    }
}

export default UserCollection;