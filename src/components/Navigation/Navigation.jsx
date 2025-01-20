import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo/logo.svg";

const Navigation = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <svg width="136" height="72">
          <use href={`${logo}#logo`}></use>
        </svg>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog </NavLink>
        <NavLink to="/favorites">Favorites </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
