import axios from 'axios';

const baseUrl = 'http://ec2-100-25-142-21.compute-1.amazonaws.com:7120';
//TODO route this to the appropriate url for API calls :)


export const getProducts = () => axios.get(`${baseUrl}/products`); 

export const getProduct = (productId) => axios.get(`${baseUrl}/products/${productId}`);
