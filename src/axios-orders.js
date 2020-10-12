import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-63465.firebaseio.com/"
});

export default instance;