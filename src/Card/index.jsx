import "./style.css";
import { Link } from "react-router-dom";
function Card({ dataObject: { name, user, email } }) {
  return (
    <div className="Container">
      <div className="Card__Campos">
        <p>{name}</p>
        <p>{user}</p>
        <p>{email}</p>
        <Link to="/">
          <button className="Button Button--Primary">Voltar ao Inicio</button>
        </Link>
      </div>
    </div>
  );
}
export default Card;
