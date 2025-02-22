import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state ? location.state : "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => console.error(error));
  };
  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-67px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                required
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                required
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            New here ? please{" "}
            <Link
              className="underline text-blue-800 font-semibold"
              to="/register">
              REGISTER
            </Link>
          </p>
          <button onClick={handleGoogle} className="btn">
            <FcGoogle />
            Sign in wtih Google
          </button>
          <button onClick={handleGithub} className="btn">
            <FaGithub />
            Sign In with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
