import axios from 'axios';

export function setPhoneNo(phoneNo) {
  return axios.get(`http://apilayer.net/api/validate?access_key=e39dd657577428e29c7acdd66835dc1a&number=${phoneNo}`)
}