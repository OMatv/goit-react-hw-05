import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.homeActive}
      >
        Home
      </NavLink>{" "}
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.moviesActive}
      >
        Movies
      </NavLink>
    </nav>
  );
}
