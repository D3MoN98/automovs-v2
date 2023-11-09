import { Navigate } from "react-router-dom";

function GuestMiddleware({ children }) {
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    return <Navigate to="/admin/dashboard" replace={true} />;
  }
  return <>{children}</>;
}

export default GuestMiddleware;
