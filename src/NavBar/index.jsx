import { Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/Register">Register</Link>
      </li>
    </ul>
  );
}
export default Navbar;
