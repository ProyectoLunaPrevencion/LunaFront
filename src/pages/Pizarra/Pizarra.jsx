import { Box, Flex, Grid, Heading, Spinner } from "@radix-ui/themes";
import { PizarraButtonsContainer } from "./components/PizarraButtonsContainer";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { FaceIcon } from "@radix-ui/react-icons";
import { PostPizarra } from "./components/PostPizarra";
import { usePostQuery } from "../../hooks/queries/usePostQuery";
import "./Pizarra.css";

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
      className="pizarra"
      minHeight="100vh"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
    >
      <Flex direction="column" gap="7" align="center" width="100%">
        <Box>
          <Flex gap="2">
            <Heading
              size={{ initial: "6", lg: "7", xl: "8" }}
              style={{ color: "white" }}
            >
              Bienvenid@ a la PIZARRA, {userName}
            </Heading>
            <Flex align="center">
              <FaceIcon width="20px" height="20px" style={{ color: "white" }} />
            </Flex>
          </Flex>
        </Box>
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
