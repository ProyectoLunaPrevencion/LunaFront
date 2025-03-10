import { useQuery } from "@tanstack/react-query";
import { getAllReportes } from "../../services/reportesServices";

export const useReportesQuery = () => {
  const query = useQuery({
    queryKey: ["reportes"],
    queryFn: getAllReportes,
  });

  return query;
};
