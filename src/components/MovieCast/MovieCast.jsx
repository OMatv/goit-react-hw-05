import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

const API_KEY = "b84def15793838968ec8ac4f935b994b";
const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_URL = `${BASE_URL}/movie`;

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`${MOVIE_URL}/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <ul className={styles.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={styles.item}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={styles.image}
              />
            )}
            <p className={styles.name}>{actor.name}</p>
            <p className={styles.character}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
