import { createBrowserRouter } from "react-router-dom";
import Root from "../main-layout/Root";
import Home from "../Pages/Home";
import AddTouristSpot from "../Pages/AddTouristSpot";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import SpotDetails from "../Components/SpotDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/tourist-spots"),
      },
      {
        path: "/add-tourist-spot",
        element: <AddTouristSpot />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/spot-details/:id",
        element: <SpotDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spot-details/${params.id}`),
      },
    ],
  },
]);

export default routes;
