import { Box, Spinner, Grid, Flex, Heading } from "@radix-ui/themes";
import { UsuarioCard } from "./components/UsuarioCard";
import { useUsuariosQuery } from "../../hooks/queries/useUsuariosQuery";

export function Usuarios() {
  const { data: usuarios, isLoading, isError } = useUsuariosQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Box>Error al cargar los usuarios</Box>;
  }

  const cursoOrder = ["ESO1", "ESO2", "ESO3", "ESO4"];
  const grupoOrder = ["A", "B", "C", "D"];

  const estudiantes = usuarios
    .filter((usuario) => usuario.rol === "ESTUDIANTE")
    .sort((a, b) => {
      const cursoDiff =
        cursoOrder.indexOf(a.curso) - cursoOrder.indexOf(b.curso);
      if (cursoDiff !== 0) return cursoDiff;

      const grupoDiff =
        grupoOrder.indexOf(a.grupo) - grupoOrder.indexOf(b.grupo);
      if (grupoDiff !== 0) return grupoDiff;

      return a.nombre.localeCompare(b.nombre);
    });

  const profesores = usuarios
    .filter((usuario) => usuario.rol === "PROFESOR")
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  const orientadores = usuarios
    .filter((usuario) => usuario.rol === "ORIENTACION")
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  return (
    <Box
      p="4"
      style={{ display: "flex", justifyContent: "center" }}
      minHeight="100vh"
    >
      <Flex direction="column" gap="9">
        <Box>
          <Flex direction="column" gap="2">
            <Heading size="4" style={{ color: "var(--orange-9)" }}>
              ESTUDIANTES
            </Heading>
            <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap="4">
              {estudiantes.map((usuario) => (
                <Box key={usuario.email}>
                  <UsuarioCard
                    nombre={usuario.nombre}
                    apellidos={usuario.apellidos}
                    email={usuario.email}
                    telefono={usuario.telefono}
                    curso={usuario.curso}
                    grupo={usuario.grupo}
                    rol={usuario.rol}
                    idUsuario={usuario.idUsuario}
                  />
                </Box>
              ))}
            </Grid>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" gap="2">
            <Heading size="4" style={{ color: "var(--orange-9)" }}>
              PROFESORES
            </Heading>
            <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap="4">
              {profesores.map((usuario) => (
                <Box key={usuario.email}>
                  <UsuarioCard
                    nombre={usuario.nombre}
                    apellidos={usuario.apellidos}
                    email={usuario.email}
                    telefono={usuario.telefono}
                    curso={usuario.curso}
                    grupo={usuario.grupo}
                    rol={usuario.rol}
                    idUsuario={usuario.idUsuario}
                  />
                </Box>
              ))}
            </Grid>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" gap="2">
            <Heading size="4" style={{ color: "var(--orange-9)" }}>
              ORIENTACIÓN
            </Heading>
            <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "4" }} gap="4">
              {orientadores.map((usuario) => (
                <Box key={usuario.email}>
                  <UsuarioCard
                    nombre={usuario.nombre}
                    apellidos={usuario.apellidos}
                    email={usuario.email}
                    telefono={usuario.telefono}
                    rol={usuario.rol}
                    idUsuario={usuario.idUsuario}
                  />
                </Box>
              ))}
            </Grid>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
