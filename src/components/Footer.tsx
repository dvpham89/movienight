import "./Footer.css";
import tmdb from "../assets/tmdb-logo.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <img className="tmdb" src={tmdb} />
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </footer>
  );
};

export default Footer;
