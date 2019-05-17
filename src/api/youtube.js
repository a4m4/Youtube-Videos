import axios from 'axios';

const KEY = 'AIzaSyCHNY5s1lIS-Pvr0LvguPAEvNrTzbgfYpo';


export default axios.create({
    baseUR: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});