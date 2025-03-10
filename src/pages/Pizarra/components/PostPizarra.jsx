import { AvatarIcon } from "@radix-ui/react-icons";
import { Badge, Box, Card, Flex, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";
import logoApp from "../../../assets/images/Logotipo-AppLuna.png";
import { EditarPost } from "./EditarPost";
import { EliminarPost } from "./EliminarPost";
import { useCurrentUserQuery } from "../../../hooks/queries/useCurrentUserQuery";

export function PostPizarra({ idPost, usuario, contenido, createdAt }) {
  const { data: currentUser } = useCurrentUserQuery();

  const canEdit =
    currentUser?.rol === "ORIENTACION" ||
    currentUser?.idUsuario === usuario.idUsuario;

  const canDelete =
    currentUser?.rol === "ORIENTACION" ||
    currentUser?.idUsuario === usuario.idUsuario;

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
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
          <Box>
            <Flex g="4" direction="column">
              <Text
                size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                weight="bold"
                style={{
                  color: "var(--pink-a11)",
                }}
              >
                <Flex direction="column" gap="5">
                  <Box>
                    <Flex justify="between">
                      <Box>
                        <Flex align="center" gap="2">
                          <AvatarIcon
                            style={{
                              color: "var(--pink-11)",
                            }}
                            width="30"
                            height="30"
                          />
                          <Flex gap="1">
                            <Text
                              size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                              weight="bold"
                              style={{
                                color: "black",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {usuario.nombre}
                            </Text>
                            <Text
                              size={{ initial: "2", xs: "3", lg: "4", xl: "5" }}
                              weight="bold"
                              style={{
                                color: "black",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {usuario.apellidos}
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box>
                        <img
                          height="30px"
                          src={logoApp}
                          alt="Logo Aplicación Luna"
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Text
                      size={{ initial: "2", xs: "3", lg: "3", xl: "5" }}
                      style={{
                        color: "#62636C",
                      }}
                    >
                      {contenido}
                    </Text>
                  </Box>
                  <Box>
                    <Flex justify="between">
                      <Text
                        size={{ initial: "1", xs: "2", lg: "2", xl: "4" }}
                        style={{
                          color: "#8B8D98",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {formatDate(createdAt)}
                      </Text>
                      <Badge color={getBadgeColor(usuario.rol)}>
                        {usuario.rol}
                      </Badge>
                    </Flex>
                  </Box>
                  <Box width="100%">
                    <Flex
                      align="center"
                      style={{
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {canEdit ? (
                        <EditarPost
                          currentPost={{
                            idPost,
                            usuario,
                            contenido,
                            createdAt,
                          }}
                        />
                      ) : null}
                      {canDelete ? <EliminarPost idPost={idPost} /> : null}
                    </Flex>
                  </Box>
                </Flex>
              </Text>
            </Flex>
          </Box>
        </Card>
      </Flex>
    </Box>
  );
}

PostPizarra.propTypes = {
  idPost: PropTypes.number.isRequired,
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
  contenido: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
