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
        element: <Services />,
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
        element:<TermsAndConditions/>
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
