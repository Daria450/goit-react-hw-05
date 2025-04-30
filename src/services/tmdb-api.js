import axios from "axios";




const baseUrl = 'https://api.themoviedb.org/3';
const accessToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjgyYWI1YmY2NWYwMjM3NDFhOTU2ZWM1MDRlMDQyZCIsIm5iZiI6MTc0NTI1MzM3NC4yNzcsInN1YiI6IjY4MDY3M2ZlYjY1OTgyMjgxMmVlNjUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyT4xBEftmYDbJSxHuOq7SZCIvsbm36zBRDtl3BScJE"

const options = {
    headers: {
        Authorization: accessToken,
    },
};

export async function fetchTrendingMovies() {
    const response = await axios.get(`${baseUrl}/trending/movie/day`, options);
    return response.data;
}

export async function searchMovies(query) {
    const response = await axios.get(`${baseUrl}/search/movie?query=${query}`, options);
    return response.data;
}

export async function fetchMovieById(movieId) {
    const response = await axios.get(`${baseUrl}/movie/${movieId}?language=en-US`, options);
    return response.data;
}

export async function fetchCast(movieId) {
    const response = await axios.get(
        `${baseUrl}/movie/${movieId}/credits`,
        options
    );
    return response.data;
}
export async function fetchMovieReviews(movieId) {
    const response = await axios.get(
        `${baseUrl}/movie/${movieId}/reviews`,
        options
    );
    return response.data;
}
