import Button from "components/Button/Button";
import "./Navbar.css";
import logo from "../../assets/Zannoza.jpeg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const specialButtonStyle: React.CSSProperties = {
    backgroundColor: "#F3ECFA",
    color: "#9031d0",
    marginRight: "50px",
    fontSize: "small",
    padding: "8px 16px",
  };

  return (
    <header className="container">
      <Link to={"/"}>
        <img src={logo} alt="zanooza-logo" className="zannozalogo" />
      </Link>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/experience">Game Experience</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="navbar-buttons">
        <Button
          name={"Client Login"}
          color={"white"}
          style={specialButtonStyle}
        />
        <Button name={"Join Our Community"} color={"#A456D8"} />
      </div>
    </header>
  );
};

export default Navbar;
