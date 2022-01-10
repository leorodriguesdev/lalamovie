//import movieList from "./movieList";
import { storeData } from "../store/storage";
import movieData from "./movieData";


export function getMovielist(callback) {
    callback(movieData);
};

export function saveMovieService(movie){
    storeData(movie);

    // promisse
    // sucesso
    // error
    
}