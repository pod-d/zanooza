import Button from "components/Button/Button";
import "./Navbar.css";
import logo from "../../assets/Zannoza.jpeg";

const Navbar: React.FC = () => {
  const specialButtonStyle: React.CSSProperties = {
    backgroundColor: "#F3ECFA",
    color: "#9031d0",
    marginRight: "50px",
    fontSize: "small",
    padding: "8px 16px",
  };

  return (
    <div className="container">
      <img src={logo} alt="zanooza-logo" className="zannozalogo"/>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/Game-experiences">Game experiences </a>
            </li>
            <li>
              <a href="/Events">Events </a>
            </li>
            <li>
              <a href="/Blog">Blog </a>
            </li>
            <li>
              <a href="/Shop">Shop</a>
            </li>
            <li>
              <a href="/About-Us">About Us </a>
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
    </div>
  );
};

export default Navbar;
