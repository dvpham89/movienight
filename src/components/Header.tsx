import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        <Link to="/">Movie Night</Link>
      </h1>
      <p>
        <Link to="/watchList">
          <i className="fa-solid fa-list"> Watch List</i>
        </Link>
      </p>
    </header>
  );
};

export default Header;
