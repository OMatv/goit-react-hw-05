import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";

const API_KEY = "b84def15793838968ec8ac4f935b994b";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(TRENDING_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.homePage}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}
