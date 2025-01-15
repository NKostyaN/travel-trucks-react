import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img
          src="../src/img/logo/logo.svg"
          alt="app logo"
          width="136"
          height="72"
        />
      </Link>
      {/* <svg class="icon">
          <use href="../src/img/logo/logo.svg"></use>
        </svg> */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
