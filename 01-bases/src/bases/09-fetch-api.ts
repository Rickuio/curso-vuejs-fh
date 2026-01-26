import type { GIFResponse } from "../interfaces/giphy.response";

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then(resp => resp.json())
  .then( (body: GIFResponse) => {
    console.log(body.data.images.downsized_medium.url);
  })
  .catch(err => console.error(err));