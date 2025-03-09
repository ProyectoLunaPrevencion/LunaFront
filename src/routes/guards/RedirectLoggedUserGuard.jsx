import { Navigate } from "react-router";
import PropTypes from "prop-types";
import { cookies, SESSION_COOKIE } from "../../utils/cookieManager";

export const RedirectLoggedUserGuard = ({ children }) => {
  const sessionCookie = cookies.get(SESSION_COOKIE);

  if (sessionCookie) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

RedirectLoggedUserGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
