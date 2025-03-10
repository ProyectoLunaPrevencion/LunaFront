import { useQuery } from "@tanstack/react-query";
import { getSeguimientosReporte } from "../../services/reportesServices";

export const useSeguimientoReporteQuery = ({ id }) => {
  const query = useQuery({
    queryKey: ["reportes", { id }, "seguimiento"],
    queryFn: () => getSeguimientosReporte(id),
  });

  return query;
};
