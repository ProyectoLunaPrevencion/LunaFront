import { Box, Container, Flex, Heading, Text, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export function BannerBienvenida() {
  return (
    <Flex
      className="right-welcome"
      width="100%"
      height="100%"
      align="center"
      justify="center"
      p={{ initial: "7", sm: "9" }}
    >
      <Box
        maxWidth={{ initial: "90%", sm: "65rem" }}
        style={{
          background: "var(--pink-1)",
          borderRadius: "1rem",
          boxShadow: "var(--shadow-6)",
          width: "100%",
        }}
      >
        <Container>
          <Flex
            direction="column"
            gap={{ initial: "4", sm: "9" }}
            align="center"
            justify="center"
            p={{ initial: "5", sm: "9" }}
          >
            <Heading
              as="h1"
              size={{ initial: "8", sm: "9" }}
              align="center"
              color="pink"
              weight="bold"
            >
              App Luna, tu espacio seguro
            </Heading>
            <Flex
              direction="column"
              align="center"
              gap={{ initial: "3", sm: "4" }}
            >
              <Text as="p" size={{ initial: "3", sm: "5" }} align="center">
                ¿Te sientes triste continuamente?
              </Text>
              <Text as="p" size={{ initial: "3", sm: "5" }} align="center">
                ¿Crees que estás recibiendo maltrato por parte de alguna
                persona?
              </Text>
              <Text as="p" size={{ initial: "3", sm: "5" }} align="center">
                ¿Tienes pensamientos negativos recurrentes?
              </Text>
            </Flex>
            <Text
              as="p"
              size={{ initial: "5", sm: "6" }}
              align="center"
              weight="bold"
            >
              Aquí estamos para ayudarte
            </Text>
            <Box>
              <Flex
                gap={{ initial: "5", xs: "8" }}
                direction={{ initial: "column", xs: "row" }}
              >
                <Button asChild size="4">
                  <Link to="/login">Inicia sesión</Link>
                </Button>
                <Button asChild size="4">
                  <Link to="/registro">Regístrate</Link>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
