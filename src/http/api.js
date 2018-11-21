import axios from 'axios'

export const API_KEY = 'AIzaSyCUCpMSBScHEGWYbZhT4HKXuD4F--jCtB4';

export const authInstance = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
});

export const databaseInstance = axios.create({
    baseURL: 'https://sign-up-form-e11ce.firebaseio.com/'
})