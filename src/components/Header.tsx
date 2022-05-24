import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link to="/">Movie Night</Link>
      </h1>

      <p>
        <Link to="/watchList">
          <i className="fa-solid fa-list"> Watch List</i>
        </Link>
      </p>
    </div>
  );
};

export default Header;