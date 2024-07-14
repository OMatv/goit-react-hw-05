import { useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const API_KEY = "b84def15793838968ec8ac4f935b994b";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    axios
      .get(`${SEARCH_URL}&query=${query}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>
      <MovieList movies={movies} />
    </div>
  );
}
