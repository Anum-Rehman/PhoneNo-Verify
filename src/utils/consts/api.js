import axios from 'axios';
export const API_URL = 'https://numverify.com/php_helper_scripts/phone_api.php';
const API_KEY = '81491336b09d8756456a0dbd1ae59bd6'

export const setPhoneNo = (phoneNo, phoneRes) => axios.get(`${API_URL}?secret_key=${API_KEY}&number= ${phoneNo}`, { ...phoneRes });