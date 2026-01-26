import { apiKey, baseUrl } from "../apiConfig";
import axios from "axios";

export default async function GetTrendMovies() {
    try {
        const { data } = await axios.get(`${baseUrl}/trending/movie/week?api_key=${apiKey}`);
        return data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return []; 
    }
}
