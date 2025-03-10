import { Box, Spinner, Flex, Heading } from "@radix-ui/themes";
import { useReportesQuery } from "../../hooks/queries/useReportesQuery";
import { ReporteCard } from "./components/ReporteCard";

export function Notificaciones() {
  const { data: reportes, isLoading, isError } = useReportesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Box>Error al cargar los usuarios</Box>;
  }

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
      minHeight="100vh"
    >
      <Flex direction="column" gap="7" align="center" width="100%">
        <Heading
          size={{ initial: "6", lg: "7", xl: "8" }}
          style={{ color: "var(--orange-9)" }}
        >
          NOTIFICACIONES
        </Heading>
        <Flex direction="column" gap="5" width="100%">
          {reportes.map((reporte) => (
            <Box key={reporte.email} width="100%">
              <ReporteCard
                idReporte={reporte.idReporte}
                usuario={reporte.usuario}
                descripcion={reporte.descripcion}
                motivo={reporte.motivo}
                fechaReporte={reporte.fechaReporte}
                createdAt={reporte.createdAt}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
