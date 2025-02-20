import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html", theme).setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const handleSignOut = () => {
    signOutUser()
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-600 border-b-2 border-amber-600 rounded-none no-underline"
              : "no-underline text-inherit "
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-tourist-spot"
          className={({ isActive }) =>
            isActive
              ? "text-amber-600 border-b-2 border-amber-600 rounded-none no-underline focus:outline-none focus:bg-none"
              : "no-underline text-inherit  focus:bg-none"
          }>
          Add Tourist Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-tourist-spots"
          className={({ isActive }) =>
            isActive
              ? "text-amber-600 border-b-2 border-amber-600 rounded-none no-underline focus:outline-none focus:bg-none"
              : "no-underline text-inherit  focus:bg-none"
          }>
          All Tourist Spots
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed z-10 shadow-sm font-lato">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-blue-600 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl gap-0">
          <span className="text-amber-600">Travel </span>
          <span className="text-blue-600">Go</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold">
        <ul className="menu menu-horizontal text-blue-600 tracking-wide px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div
            className="dropdown dropdown-end tooltip tooltip-left"
            data-tip={user?.displayName}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  alt=""
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a>Profile</a>
              </li>

              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              className="border hover:scale-[97%] duration-200 rounded-full lg:tracking-widest font-semibold lg:px-6 px-4  py-1"
              to="/login">
              Login
            </Link>
            <Link
              className="border hover:scale-[97%] duration-200 rounded-full lg:tracking-widest font-semibold lg:px-6 px-4  py-1"
              to="/Register">
              Register
            </Link>
          </div>
        )}
        <input
          onChange={handleToggle}
          type="checkbox"
          defaultChecked={theme === "dark"}
          className="toggle toggle-neutral"
        />
      </div>
    </div>
  );
};

export default NavBar;
