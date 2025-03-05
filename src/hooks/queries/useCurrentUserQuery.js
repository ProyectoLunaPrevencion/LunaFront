import { skipToken, useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/userService";
import { getCookie, SESSION_COOKIE } from "../../utils/cookieManager";

const token = getCookie(SESSION_COOKIE);

export const useCurrentUserQuery = () => {
  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: token ? getCurrentUser : skipToken,
    enabled: !!token,
  });

  return query;
};
