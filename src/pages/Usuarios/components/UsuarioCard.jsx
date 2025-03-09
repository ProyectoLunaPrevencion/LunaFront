import {
  AvatarIcon,
  ClipboardCopyIcon,
  EnvelopeOpenIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Card, Box, Flex, Text, Badge, IconButton } from "@radix-ui/themes";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import { EliminarUsuario } from "./EliminarUsuario";
import { EditarUsuario } from "./EditarUsuario";

export function UsuarioCard({
  idUsuario,
  nombre,
  apellidos,
  email,
  telefono,
  curso,
  grupo,
  rol,
}) {
  const getBadgeColor = (rol) => {
    switch (rol) {
      case "ESTUDIANTE":
        return "green";
      case "PROFESOR":
        return "blue";
      case "ORIENTACION":
        return "orange";
      default:
        return "gray";
    }
  };

  const getCursoText = (curso) => {
    switch (curso) {
      case "ESO1":
        return "1ºESO ";
      case "ESO2":
        return "2ºESO ";
      case "ESO3":
        return "3ºESO ";
      case "ESO4":
        return "4ºESO ";
      default:
        return curso;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copiado al portapapeles");
  };

  return (
    <Box width="100%" maxWidth="350px" p="0">
      <Card style={{ height: "220px", justifyContent: "space-between" }}>
        <Flex
          direction="column"
          gap="3"
          justify="center"
          align="start"
          style={{ height: "100%", justifyContent: "space-between" }}
        >
          <Box
            width="100%"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Flex gap="4" justify="center" align="center">
              <AvatarIcon
                style={{
                  color: "var(--pink-a11)",
                }}
                width="40"
                height="40"
              />
              <Box>
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
                      {nombre}
                    </Text>
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
                      {apellidos}
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex justify="between" align="center" gap="6">
                    <Badge color={getBadgeColor(rol)}>{rol}</Badge>
                    {rol !== "ORIENTACION" && (
                      <Box>
                        <Text
                          color="gray"
                          size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                          style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {getCursoText(curso)}
                        </Text>
                        <Text
                          color="gray"
                          size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                          style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {grupo}
                        </Text>
                      </Box>
                    )}
                  </Flex>
                </Box>
              </Box>
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
                <Flex align="center" gap="2" justify="between">
                  <Box width="calc(100% - 32px)">
                    <Flex gap="2">
                      <IconButton size="1">
                        <EnvelopeOpenIcon />
                      </IconButton>
                      <Text
                        width="100%"
                        size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                        style={{
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {email}
                      </Text>
                    </Flex>
                  </Box>
                  <IconButton
                    size="1"
                    style={{ cursor: "pointer" }}
                    onClick={handleCopyEmail}
                  >
                    <ClipboardCopyIcon />
                  </IconButton>
                </Flex>
              </Box>
              {telefono && (
                <Box>
                  <Flex align="center" gap="2">
                    <IconButton size="1">
                      <MobileIcon />
                    </IconButton>
                    <Text
                      size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {telefono}
                    </Text>
                  </Flex>
                </Box>
              )}
            </Flex>
          </Box>
          <Box width="100%">
            <Flex
              align="center"
              style={{ alignItems: "center", justifyContent: "space-evenly" }}
            >
              <EditarUsuario
                currentUser={{
                  idUsuario,
                  nombre,
                  apellidos,
                  email,
                  telefono,
                  curso,
                  grupo,
                  rol,
                }}
              />
              <EliminarUsuario idUsuario={idUsuario} />
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

UsuarioCard.propTypes = {
  idUsuario: PropTypes.string,
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telefono: PropTypes.string,
  curso: PropTypes.string,
  grupo: PropTypes.string,
  rol: PropTypes.string.isRequired,
};
