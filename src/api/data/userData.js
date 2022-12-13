import axios from 'axios';
import firebaseConfig from '../apiKeys';

const { databaseURL } = firebaseConfig;

const getUserInfo = (key) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/profiles/${key}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getUser = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/profiles/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getUserInfo, getUser,
};
