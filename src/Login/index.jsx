import "./style.css";
function Login() {
  const handleLogin = () => {};
  return (
    <div className="Login">
      <h3 className="Login__Title">Login</h3>
      <form className="Form">
        <div className="Form__Row">
          <input className="Form__Input Input" type="text" placeholder="User" />
        </div>
        <div className="Form__Row">
          <input
            className="Form__Input Input "
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="Button Button--Primary">Login</button>
      </form>
    </div>
  );
}
export default Login;
