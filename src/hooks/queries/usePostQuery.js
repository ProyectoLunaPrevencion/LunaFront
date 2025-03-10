import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/postsServices";

export const usePostQuery = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return query;
};
