
import "../Styles/SignUp.css";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="divider">OR</div>
        <button className="google-btn">
          <FaGoogle /> Continue with Google
        </button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
