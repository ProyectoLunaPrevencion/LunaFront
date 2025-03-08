import PropTypes from "prop-types";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { Spinner } from "@radix-ui/themes";
import { Navigate } from "react-router";

const ALLOWED_ROLES = ["ORIENTACION"];

export function AdminGuard({ children }) {
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

AdminGuard.propTypes = {
  children: PropTypes.node.isRequired,
};
