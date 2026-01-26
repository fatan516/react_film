
import { apiKey, baseUrl } from "../apiConfig";
import axios from "axios";

export default async function getMonetizationMovies(type) {

    try {
        const { data } = await axios.get(`${baseUrl}/discover/movie?with_watch_monetization_types=${type}&watch_region=DE&api_key=${apiKey}`);
        return data.results;
    } catch (error) {
        console.error("Error fetching getMonetizationMovies:", error);
        return []; 
    }
}
