
import axios, {AxiosError} from 'axios';
import type { GIFResponse } from '../interfaces/giphy.response';

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

export default giphyAPI;

giphyAPI.get<GIFResponse>('/random')
  .then( resp => console.log(resp.data.data.images.downsized_medium.url))
  .catch ( err => console.log(err));