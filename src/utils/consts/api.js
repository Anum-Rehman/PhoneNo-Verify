import axios from 'axios';

export function setPhoneNo(phoneNo) {
  return axios.get(`https://numverify.com/php_helper_scripts/phone_api.php?secret_key=81491336b09d8756456a0dbd1ae59bd6&number=${phoneNo}`)
}