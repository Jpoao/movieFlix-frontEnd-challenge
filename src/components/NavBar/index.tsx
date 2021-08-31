import { getAuthData } from "util/storage";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <h2>MovieFlix</h2>
      {getAuthData().access_token && (
        <div className="btn-container">
          <a href="#SAIR">
            SAIR
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
