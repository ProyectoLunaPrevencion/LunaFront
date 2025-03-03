import { Section, Container, Box, Heading, Flex } from "@radix-ui/themes";
import { Conflictos } from "./components/Conflictos";
import { SaludMental } from "./components/SaludMental";

export function Informacion() {
  return (
    <Section>
      <Container>
        <Box width="100%" p={{ initial: "5", xs: "7" }}>
          <Flex
            direction="column"
            gap={{ initial: "7", sm: "9" }}
            justify="center"
          >
            <Heading
              as="h1"
              size={{ initial: "8", sm: "9" }}
              align="center"
              color="pink"
              weight="bold"
            >
              ¿Exploramos los conflictos y la salud mental?
            </Heading>
            <Conflictos />
            <SaludMental />
          </Flex>
        </Box>
      </Container>
    </Section>
  );
}
