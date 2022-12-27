import axios from 'axios'
const Api = axios.create({
   // baseURL: 'https://facelike.bmlabs.ru/api/',
    baseURL: '/api',
})

export default Api