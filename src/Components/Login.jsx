
import "../Styles/Login.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="divider">OR</div>
        <button className="google-btn">
          <FaGoogle /> Continue with Google
        </button>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
