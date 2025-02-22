import { createBrowserRouter } from "react-router-dom";
import Root from "../main-layout/Root";
import Home from "../Pages/Home";
import AddTouristSpot from "../Pages/AddTouristSpot";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import SpotDetails from "../Components/SpotDetails";
import CountrySpots from "../Components/CountrySpots";
import AllTouristSpots from "../Pages/AllTouristSpots";
import MyList from "../Pages/MyList";
import Update from "../Components/Update";
import PrivateRoute from "../Private Route/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <SpotDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spot-details/${params.id}`),
      },
      {
        path: "/countries/:country",
        element: <CountrySpots />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/countries/${params.country}`),
      },
      {
        path: "/all-tourist-spots",
        element: <AllTouristSpots />,
        loader: () => fetch("http://localhost:5000/tourist-spots"),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spot-details/${params.id}`),
      },
    ],
  },
]);

export default routes;
