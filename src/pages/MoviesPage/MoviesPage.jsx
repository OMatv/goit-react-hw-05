import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const API_KEY = "b84def15793838968ec8ac4f935b994b";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}&query=${query}`)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => console.error(error));
    }
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.query.value.trim();
    if (query) {
      setSearchParams({ query });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
