import { useParams } from "react-router";
import { useReporteQuery } from "../../hooks/queries/useReporteQuery";
import { useSeguimientoReporteQuery } from "../../hooks/queries/useSeguimientoReporteQuery";
import {
  Spinner,
  Box,
  Flex,
  Heading,
  Text,
  Card,
  Badge,
} from "@radix-ui/themes";
import { EditarSeguimiento } from "./components/EditarSeguimiento";
import { EliminarSeguimiento } from "./components/EliminarSeguimiento";
import { CrearSeguimiento } from "./components/CrearSeguimiento";

export function DetallesNotificacion() {
  const { id: idReporte } = useParams();
  const {
    data: reporte,
    isLoading: isLoadingReporte,
    error: errorReporte,
  } = useReporteQuery({ id: idReporte });
  const { data: seguimientos, isLoading: isLoadingSeguimiento } =
    useSeguimientoReporteQuery({ id: idReporte });

  if (isLoadingReporte || isLoadingSeguimiento) {
    return (
      <Box minHeight="100vh">
        <Flex align="center" justify="center">
          <Spinner />
        </Flex>
      </Box>
    );
  }

  if (errorReporte) {
    return (
      <Box minHeight="100vh">
        <Flex align="center" justify="center">
          <Heading
            as="h1"
            size={{ initial: "7", lg: "8", xl: "9" }}
            align="center"
            color="pink"
          >
            Error: el reporte no existe
          </Heading>
        </Flex>
      </Box>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getEstadoColor = (estado) => {
    switch (estado) {
      case "PENDIENTE":
        return "green";
      case "EN_PROCESO":
        return "yellow";
      case "ARCHIVADO":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <Box
      minHeight="100vh"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
    >
      <Flex direction="column" gap="7" align="center" width="100%">
        <Heading
          size={{ initial: "6", lg: "7", xl: "8" }}
          style={{ color: "var(--orange-9)" }}
        >
          Detalles de la Notificación
        </Heading>
        <Card style={{ width: "100%", maxWidth: "800px", padding: "2rem" }}>
          <Flex direction="column" gap="6">
            <Box>
              <Flex direction="column" gap="2">
                <Heading
                  size={{ initial: "5", lg: "6" }}
                  style={{ color: "var(--pink-a11)" }}
                >
                  Descripción
                </Heading>
                <Text
                  size={{ initial: "3", lg: "4" }}
                  style={{ color: "#62636C" }}
                >
                  {reporte.descripcion}
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction="column" gap="2">
                <Box>
                  <Flex justify="between">
                    <Heading
                      size={{ initial: "5", lg: "6" }}
                      style={{ color: "var(--pink-a11)" }}
                    >
                      Seguimientos
                    </Heading>
                    <CrearSeguimiento idReporte={idReporte} />
                  </Flex>
                </Box>
                <Flex direction="column" gap="2">
                  {seguimientos.map((seguimiento) => (
                    <Card
                      key={seguimiento.idSeguimiento}
                      style={{ padding: "1rem" }}
                    >
                      <Flex direction="column" gap="4">
                        <Box>
                          <Flex justify="between" align="center">
                            <Box>
                              <Text
                                size={{ initial: "3", lg: "4" }}
                                style={{ color: "#62636C" }}
                              >
                                Fecha actualización:{" "}
                                {formatDate(seguimiento.fechaActualizacion)}
                              </Text>
                            </Box>
                            <Box>
                              <Badge color={getEstadoColor(seguimiento.estado)}>
                                {seguimiento.estado === "EN_PROCESO"
                                  ? "EN PROCESO"
                                  : seguimiento.estado}
                              </Badge>
                            </Box>
                          </Flex>
                        </Box>
                        <Box>
                          <Text size={{ initial: "3", lg: "4" }}>
                            {seguimiento.comentarios}
                          </Text>
                        </Box>
                        <Box>
                          <Flex justify="between">
                            <EditarSeguimiento
                              currentSeguimiento={seguimiento}
                            />
                            <EliminarSeguimiento
                              idSeguimiento={seguimiento.idSeguimiento}
                            />
                          </Flex>
                        </Box>
                      </Flex>
                    </Card>
                  ))}
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}
