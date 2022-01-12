import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/AutContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Navigate to="/" />
  );
}