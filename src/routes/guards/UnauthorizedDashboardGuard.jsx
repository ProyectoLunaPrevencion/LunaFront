import PropTypes from "prop-types";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { Spinner } from "@radix-ui/themes";
import { Navigate } from "react-router";

const ALLOWED_ROLES = ["PROFESOR", "ORIENTACION"];

export function UnauthorizedDashboardGuard({ children }) {
  const { data: currentUser, isLoading } = useCurrentUserQuery();

  if (isLoading || !currentUser) {
    return <Spinner />;
  }

  const { rol } = currentUser;

  if (!ALLOWED_ROLES.includes(rol)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

UnauthorizedDashboardGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
