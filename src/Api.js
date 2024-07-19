import axios from "axios";

const API_KEY = "b84def15793838968ec8ac4f935b994b";
const BASE_URL = "https://api.themoviedb.org/3";
("https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg");
("https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png");
("https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png");

const headers = {
  Authorization: `Bearer  ${API_KEY}`,
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers,
  });
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    headers,
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return data.results;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, { headers });
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    headers,
  });
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    headers,
  });
  return data;
};
