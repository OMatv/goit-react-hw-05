import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export default function Navigation() {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to="/" exact className={makeNavLinkClass}>
          Home
        </NavLink>{" "}
        <NavLink to="/movies" className={makeNavLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
