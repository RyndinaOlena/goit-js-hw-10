export { fetchBreeds }
import axios from "axios";

const API_KEY = axios.defaults.headers.common["x-api-key"] = "live_O4Nbn4iSQKDkMOFXZYeuCiyW4L0VJqoAZOulbPJHGGgpTLXIMLGudCOcOwO6HY2u";
const API_URL = 'https://api.thecatapi.com/v1/breeds'


function fetchBreeds() {
    return axios.get(API_URL, API_KEY).then((responce) => {
        return responce.data
    })
}

