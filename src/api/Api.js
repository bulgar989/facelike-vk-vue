import axios from 'axios'
const Api = axios.create({
    baseURL: 'http://localhost:8010/proxy/',
})

export default Api