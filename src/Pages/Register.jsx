import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { signUpUser, updateUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // const regex = /^(?=.*[A-Z])/;
    if (!/^(?=.*[A-Z])/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "password must has an Uppercase character!",
      });
    } else if (!/^(?=.*[a-z])/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "password must has an lowercase character!",
      });
    } else if (!/.{6,}$/.test(password)) {
      return Swal.fire({
        icon: "error",
        text: "password must have minimum 6 letters!",
      });
    }
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(userName, photoURL)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-67px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="fieldset-label">Username</label>
              <input
                required
                type="name"
                name="username"
                className="input"
                placeholder="Username"
              />
              <label className="fieldset-label">Photo URL</label>
              <input
                required
                type="text"
                name="photoURL"
                className="input"
                placeholder="photoURL"
              />
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

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p>
            Already have an account? please{" "}
            <Link className="underline text-blue-800 font-semibold" to="/login">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
