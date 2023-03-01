import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentUser = null;

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
