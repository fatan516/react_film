import { apiKey, baseUrl } from "../apiConfig";
import axios from "axios";

export default async function GetPopularMovies() {
    try {
        const { data } = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
        return data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return []; 
    }
}
