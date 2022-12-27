import axios from 'axios'
const Api = axios.create({
    baseURL: 'https://facelike.bmlabs.ru/api/',
    // baseURL: 'http://localhost:8010/proxy/',
})

export default Api