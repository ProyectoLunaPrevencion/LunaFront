import { Box, Flex, Grid, Heading, Spinner } from "@radix-ui/themes";
import { PizarraButtonsContainer } from "./components/PizarraButtonsContainer";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { FaceIcon } from "@radix-ui/react-icons";
import { PostPizarra } from "./components/PostPizarra";
import { usePostQuery } from "../../hooks/queries/usePostQuery";

export function Pizarra() {
  const { data: currentUser } = useCurrentUserQuery();
  const { data: posts, isLoading, isError } = usePostQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Box>Error al cargar los usuarios</Box>;
  }

  const userName = currentUser?.nombre;

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

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
          Bienvenid@ a la PIZARRA, {userName}{" "}
          <FaceIcon width="20px" height="20px" />
        </Heading>
        <PizarraButtonsContainer />
        <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
          {sortedPosts.map((post) => (
            <Box key={post.idPost}>
              <PostPizarra
                idPost={post.idPost}
                usuario={post.usuario}
                contenido={post.contenido}
                createdAt={post.createdAt}
              />
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

/* navbar que tiene filtrar los posts según curso y grupo. Añadir botón para crear posts (solo rol de profesores y orientadores) */
/* card: id del usuario, contenido y created at, editar y borrar */
