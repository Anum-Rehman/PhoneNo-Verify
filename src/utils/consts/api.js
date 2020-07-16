import axios from 'axios';
export const API_URL = 'http://apilayer.net/api/validate';
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
//calling axios function
export const setPhoneNo = (phoneNo, phoneRes) => axios.get(`${API_URL}?access_key=${API_KEY}&number=${phoneNo}`, { ...phoneRes });
