import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        <Link to="/">
          <img
            src={require("../assets/movie-night-logo.gif")}
            alt="movie-night"
          />
        </Link>
      </h1>
      <p>
        <Link to="/watchList">
          <i className="fa-solid fa-meteor"> Watch List</i>
        </Link>
      </p>
    </header>
  );
};

export default Header;
