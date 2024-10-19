/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <p>Loading ----- !! </p>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace/>
};

export default PrivateRoute;