import { createBrowserRouter } from "react-router-dom";

import AdminRoot from "../Pages_Admin/AdminLayout/AdminRoot";
import Dashboard from "../Pages_Admin/Dashboard/Dashboard";
import Root from "../Layout/Root";
import Error from "../Pages_User/Error/Error";
import Home from "../Pages_User/Home/Home";
import Services from "../Pages_User/Services/Services";
import Login from "../Pages_User/Login/Login";
import Register from "../Pages_User/Register/Register";
import TermsAndConditions from "../Components/TermsAndConditions/TermsAndConditions";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import Service_Details from "../Pages_User/Services/Service_Details";
import Booking_Form from "../Pages_User/Booking/Booking_Form";
import MyBooking from "../Pages_User/MyBooking/MyBooking";
import PrivateRoute from "../Pages_User/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "services",
        loader: async () => {
          return fetch("http://localhost:5000/api/v1/services")
            .then(res => res.json());
        },
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: async ({params}) => {
          return fetch(`http://localhost:5000/api/v1/services/${params.id}`)
            .then(res => res.json());
        },
        element:<Service_Details/>
      },
      {
        path: "/booking/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/api/v1/services/${params.id}`)
            .then(res => res.json());
        },
        element: <PrivateRoute><Booking_Form /></PrivateRoute>
      },
      {
        path: "/my-booking",
        element:<MyBooking/>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "TermsAndConditions",
        element: <TermsAndConditions />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin/",
        element: <Dashboard />,
      },
    ],
  },
]);
