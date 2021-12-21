import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://gym-entrance-backend.herokuapp.com/',
});