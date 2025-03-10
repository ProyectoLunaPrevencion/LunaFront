import PropTypes from "prop-types";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { Spinner } from "@radix-ui/themes";
import { Navigate, useLocation } from "react-router";
import { cookies, SESSION_COOKIE } from "../../utils/cookieManager";

const ALLOWED_ROLES = ["PROFESOR", "ORIENTACION"];
const DASHBOARD_COMMON_PATHNAMES = ["", "/informacion", "/ajustes", "/pizarra"];

export function DashboardGuard({ children }) {
  const sessionCookie = cookies.get(SESSION_COOKIE);
  const { data: currentUser, isLoading } = useCurrentUserQuery();
  const { pathname } = useLocation();

  if (!sessionCookie) {
    return children;
  }

  if (isLoading || !currentUser) {
    return <Spinner />;
  }

  const { rol } = currentUser;

  if (ALLOWED_ROLES.includes(rol)) {
    const pathToNavigate = DASHBOARD_COMMON_PATHNAMES.includes(pathname)
      ? `/dashboard${pathname}`
      : `/dashboard`;

    return <Navigate to={pathToNavigate} replace />;
  }

  return children;
}

DashboardGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
