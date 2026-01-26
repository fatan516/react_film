import { apiKey, baseUrl } from "../apiConfig";
import axios from "axios";

export default async function GetPopularTvs() {
    try {
        const { data } = await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}`);
        return data.results;
    } catch (error) {
        console.error("Error fetching tvs:", error);
        return []; 
    }
}
