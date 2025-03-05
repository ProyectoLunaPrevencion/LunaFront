import "../Header/Header.css";
import { Heading, Box } from "@radix-ui/themes";

export function HeaderDashboard() {
  return (
    <Box
      style={{
        background: "var(--header)",
        boxShadow: "4px 0 2px -2px rgba(0, 0, 0, 0.2)",
      }}
      p="3"
    >
      <Heading
        as="h1"
        size={{ initial: "8", sm: "9" }}
        align="center"
        color="pink"
        weight="bold"
      >
        Dashboard
      </Heading>
    </Box>
  );
}
