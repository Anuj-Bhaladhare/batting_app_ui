import axios from 'axios';
const BASE_URL = "https://betfair14.p.rapidapi.com";

const relayService = ({ url, method = 'GET', headers, data }) => {
    const axios_instance = axios({ url, method, baseURL: BASE_URL, headers, data })
    return axios_instance
}

export default relayService