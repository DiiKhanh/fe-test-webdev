import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // wait be return data usser login
  const currentUser = 1;

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
