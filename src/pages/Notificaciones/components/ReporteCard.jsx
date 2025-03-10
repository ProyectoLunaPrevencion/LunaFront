import { PlusIcon } from "@radix-ui/react-icons";
import { Card, Box, Flex, Text, Badge, Button } from "@radix-ui/themes";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

export function ReporteCard({
  usuario,
  descripcion,
  motivo,
  fechaReporte,
  createdAt,
  idReporte,
}) {
  const navigate = useNavigate();

  const getBadgeColor = (motivo) => {
    switch (motivo) {
      case "ACOSO":
        return "red";
      case "MALESTAR_EMOCIONAL":
        return "blue";
      case "PROBLEMA_ACADEMICO":
        return "green";
      case "OTROS":
        return "orange";
      default:
        return "gray";
    }
  };

  const formatMotivo = (motivo) => {
    switch (motivo) {
      case "MALESTAR_EMOCIONAL":
        return "MALESTAR EMOCIONAL";
      case "PROBLEMA_ACADEMICO":
        return "PROBLEMA ACADÉMICO";
      default:
        return motivo;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const checkDetails = () => {
    navigate(`/dashboard/notificaciones/${idReporte}`);
  };

  return (
    <Box width="100%" p="0">
      <Flex direction="column" justify="center" align="center">
        <Card
          style={{
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <Flex
            direction="column"
            gap="3"
            justify="center"
            align="start"
            style={{ height: "100%", justifyContent: "space-between" }}
            width="100%"
          >
            <Box
              width="100%"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Flex gap="3" justify="center" align="center" width="100%">
                <Box width="100%" style={{ flex: 1, minWidth: 0 }}>
                  <Flex justify="between" direction="column">
                    <Box>
                      <Flex gap="1">
                        <Text
                          size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                          weight="bold"
                          style={{
                            color: "var(--pink-a11)",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {usuario.nombre} {usuario.apellidos}
                        </Text>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex>
                        <Text
                          color="gray"
                          size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                          style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {formatDate(createdAt)}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Button onClick={checkDetails}>
                  <Flex gap="1">
                    <PlusIcon width="18px" height="18px" />
                    <Text size="2">Ver detalles</Text>
                  </Flex>
                </Button>
              </Flex>
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  background:
                    "linear-gradient(to right, rgba(255, 192, 203, 0), var(--pink-a11), rgba(255, 192, 203, 0))",
                  width: "100%",
                }}
              />
            </Box>
            <Box width="100%">
              <Flex direction="column" gap="1">
                <Box>
                  <Text
                    size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                    style={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {descripcion}
                  </Text>
                </Box>
                <Box>
                  <Flex justify="between">
                    <Box>
                      <Badge color={getBadgeColor(motivo)}>
                        {formatMotivo(motivo)}
                      </Badge>
                    </Box>
                    <Box>
                      <Text
                        size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                        color="gray"
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Cuando: {formatDate(fechaReporte)}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}

ReporteCard.propTypes = {
  usuario: PropTypes.shape({
    idUsuario: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefono: PropTypes.string,
    curso: PropTypes.string,
    grupo: PropTypes.string,
    rol: PropTypes.string.isRequired,
    fechaRegistro: PropTypes.string,
  }).isRequired,
  descripcion: PropTypes.string.isRequired,
  motivo: PropTypes.string.isRequired,
  fechaReporte: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  idReporte: PropTypes.number.isRequired,
};
