import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";

const API_KEY = "b84def15793838968ec8ac4f935b994b";
const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_URL = `${BASE_URL}/movie`;

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const locationRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    axios
      .get(`${MOVIE_URL}/${movieId}?api_key=${API_KEY}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button
        onClick={() => navigate(locationRef.current)}
        className={styles.button}
      >
        Go back
      </button>
      <div className={styles.details}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.userScore}>
            User Score: {movie.vote_average * 10}%
          </p>
          <p className={styles.genres}>
            Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className={styles.description}>{movie.overview}</p>
          <div className={styles.links}>
            <Link
              to="cast"
              state={{ from: locationRef.current }}
              className={styles.link}
            >
              Cast
            </Link>
            <Link
              to="reviews"
              state={{ from: locationRef.current }}
              className={styles.link}
            >
              Reviews
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
