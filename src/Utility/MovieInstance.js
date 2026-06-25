import axios from "axios";


const movieInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    
});

export {movieInstance};

// https://api.themoviedb.org/3/discover/movie?api_key=8dd4596aa2d87016a981c5d6205f4ee1&with_genres=99