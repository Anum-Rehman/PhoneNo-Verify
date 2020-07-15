import axios from 'axios';
export const API_URL = 'http://apilayer.net/api/validate';
const API_KEY = 'e39dd657577428e29c7acdd66835dc1a'

export const setPhoneNo = (phoneNo, phoneRes) => axios.get(`${API_URL}?access_key=${API_KEY}&number=${phoneNo}`, { ...phoneRes });
