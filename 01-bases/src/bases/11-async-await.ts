import type { GIFResponse } from "../interfaces/giphy.response";
import { giphyAPI } from "./10-axios";

export const getImage = async() => {

    try {
        const respuesta = giphyAPI.get<GIFResponse>('/random');
        return (await respuesta).data.data.images.downsized_large.url;
        // const respuesta = await giphyAPI.get<GIFResponse>('/random');
        // return respuesta.data.data.images.downsized_medium.url;
    } catch (error) {
        throw 'URL no encontrada';
    }

}

export const getImagePromise = () => {
    return new Promise(resolve => {
        resolve('https://visaeuropa.lat/image2.jpg');
    }) 
}

console.log(getImagePromise());
// console.log(getImage());
getImage()
  .then((url) => console.log({url}))
  .catch(err => console.log(err));
