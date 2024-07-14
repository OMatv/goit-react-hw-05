import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./MovieReviews.module.css";

const API_KEY = "b84def15793838968ec8ac4f935b994b";
const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_URL = `${BASE_URL}/movie`;

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${MOVIE_URL}/${movieId}/reviews?api_key=${API_KEY}`)
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Reviews</h2>
      <ul className={styles.listReview}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.itemReview}>
            <p className={styles.author}>Author: {review.author}</p>
            <p className={styles.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
