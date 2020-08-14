import axios from 'axios'

export const apiViaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export const apiServer = axios.create({
  baseURL: 'http://localhost:3333',
});