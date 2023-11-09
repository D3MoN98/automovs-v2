import { Navigate } from "react-router-dom";

function AuthMiddleware({ children }) {
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    return <Navigate to="/admin/login" replace={true} />;
  }
  return <>{children}</>;
}

export default AuthMiddleware;
