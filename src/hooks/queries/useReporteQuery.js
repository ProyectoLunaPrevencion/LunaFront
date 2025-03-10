import { useQuery } from "@tanstack/react-query";
import { getReporte } from "../../services/reportesServices";

export const useReporteQuery = ({ id }) => {
  const query = useQuery({
    queryKey: ["reportes", { id }],
    queryFn: () => getReporte(id),
  });

  return query;
};
