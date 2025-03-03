import { Box, Heading, Flex } from "@radix-ui/themes";

export function SaludMental() {
  return (
    <Box>
      <Flex direction="column" gap={{ initial: "8", sm: "9" }} justify="center">
        <Heading
          as="h2"
          size={{ initial: "7", sm: "8" }}
          align="center"
          style={{ color: "var(--orange-9)" }}
          weight="bold"
        >
          Salud mental:
        </Heading>
        <Heading
          as="h3"
          size={{ initial: "6", sm: "7" }}
          color="pink"
          weight="bold"
        >
          Ansiedad
        </Heading>
      </Flex>
    </Box>
  );
}
