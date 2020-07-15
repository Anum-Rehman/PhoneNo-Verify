import axios from 'axios';
export const API_URL = 'https://numverify.com/php_helper_scripts/phone_api.php?secret_key=81491336b09d8756456a0dbd1ae59bd6';

function _errorHandler(err) {
  console.error('API_ERROR: ', err);
}

export function getPhoneNo(phoneNo) {
  return axios
    .get(API_URL, { ...phoneNo })
    .then(({ data }) => data)
    .catch(_errorHandler);
}

export function setPhoneNo(givenPhoneNo) {
  return axios
    .post(API_URL, { ...givenPhoneNo })
    .then(({ data }) => data)
    .catch(_errorHandler);

}