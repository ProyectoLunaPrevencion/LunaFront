import { Navigate } from "react-router";
import PropTypes from "prop-types";
import { cookies, SESSION_COOKIE } from "../../utils/cookieManager";

export const RedirectUnauthorizedUserGuard = ({ children }) => {
  const sessionCookie = cookies.get(SESSION_COOKIE);

  if (!sessionCookie) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

RedirectUnauthorizedUserGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
