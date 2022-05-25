import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import movienight from "../assets/movie-night-logo.gif";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <header className="Header">
      <h1>
        <img src={movienight} alt="movie-night" onClick={goHome} />
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
