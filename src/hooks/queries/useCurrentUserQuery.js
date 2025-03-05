import { skipToken, useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/userService";
import { cookies, SESSION_COOKIE } from "../../utils/cookieManager";

export const useCurrentUserQuery = () => {
  const token = cookies.get(SESSION_COOKIE);
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: token ? getCurrentUser : skipToken,
    enabled: !!token,
  });

  return query;
};
