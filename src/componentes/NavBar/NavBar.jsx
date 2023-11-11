import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={"../img/logo.jpg"} alt="Logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/1">Celulares</NavLink>
          </li>

          <li>
            <NavLink to="categoria/2">Tablets</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
