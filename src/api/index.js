import axios from "axios"

const apiKey = "41f05fcf3dfeadf63967c8197b148e4f"

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&languages=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
}


