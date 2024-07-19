import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const API_KEY = "b84def15793838968ec8ac4f935b994b";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ query: form.elements.query.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="query" className={styles.input} />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
