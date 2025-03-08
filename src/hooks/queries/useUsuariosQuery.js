import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../services/userService";

export const useUsuariosQuery = () => {
  const query = useQuery({
    queryKey: ["usuarios"],
    queryFn: getAllUsers,
  });

  return query;
};
