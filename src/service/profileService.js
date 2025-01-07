import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000/api/profile';

export const getUserName = async(userName) => {
    try{
        const response = await axios.post(`${API_URL}/check-username?username=${userName}`);
    }catch{

    }
}