import axios from 'axios';

export default axios.create({
    baseURL: 'https://formula-test-api.herokuapp.com',
    params: {
        part: 'snippet',
        maxResults: 6
    }
})
