class ApiReader {
    static async get(url) {
        return await fetch(url).then(data => data.json());
    }
}

export default ApiReader;