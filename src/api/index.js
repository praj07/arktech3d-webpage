import axios from 'axios';

const baseUrl = 'http://localhost:7120';
//TODO route this to the appropriate url for API calls :)


export const getProducts = () => axios.get(`${baseUrl}/products`); 

export const getProduct = (productId) => axios.get(`${baseUrl}/products/${productId}`);
