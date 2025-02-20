import {
  Section,
  Flex,
  Box,
  Container,
  Heading,
  Text,
  TextField,
  Select,
  Button,
  Link,
} from "@radix-ui/themes";
import {
  PersonIcon,
  EnvelopeClosedIcon,
  MobileIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import signupImage from "../../assets/images/signup-image.jpg";

export function Registro() {
  return (
    <Section p="0">
      <Flex
        width="100%"
        height={{ initial: "100%", md: "100vh" }}
        align="center"
        justify="center"
        direction={{ initial: "column", md: "row" }}
      >
        <Box width="100%" p={{ initial: "5", xs: "7" }} maxWidth="50rem">
          <Box
            width="100%"
            p="6"
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
                gap={{ initial: "4", sm: "7" }}
                align="center"
                justify="center"
                width="100%"
              >
                <Heading
                  as="h1"
                  size={{ initial: "7", lg: "8", xl: "9" }}
                  align="center"
                  color="pink"
                  weight="bold"
                >
                  Crea tu cuenta
                </Heading>
                <Flex align="center" gap={{ initial: "3", sm: "4" }}>
                  <Flex direction="column" gap={{ initial: "4", sx: "5" }}>
                    <Flex gap="5" direction={{ initial: "column", xs: "row" }}>
                      <Flex
                        direction="column"
                        gap="1"
                        width={{ initial: "100%", sm: "40%" }}
                      >
                        <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                          Nombre
                        </Text>
                        <TextField.Root placeholder="Nombre">
                          <TextField.Slot>
                            <PersonIcon
                              color="var(--pink-9)"
                              height="16"
                              width="16"
                            />
                          </TextField.Slot>
                        </TextField.Root>
                      </Flex>
                      <Flex
                        direction="column"
                        gap="1"
                        width={{ initial: "100%", sm: "60%" }}
                      >
                        <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                          Apellidos
                        </Text>
                        <TextField.Root placeholder="Apellidos">
                          <TextField.Slot>
                            <PersonIcon
                              color="var(--pink-9)"
                              height="16"
                              width="16"
                            />
                          </TextField.Slot>
                        </TextField.Root>
                      </Flex>
                    </Flex>
                    <Flex direction="column" gap="1">
                      <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                        Email
                      </Text>
                      <TextField.Root placeholder="Email">
                        <TextField.Slot>
                          <EnvelopeClosedIcon
                            color="var(--pink-9)"
                            height="16"
                            width="16"
                          />
                        </TextField.Slot>
                      </TextField.Root>
                    </Flex>
                    <Flex direction="column" gap="1">
                      <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                        Teléfono
                      </Text>
                      <TextField.Root placeholder="Número de teléfono">
                        <TextField.Slot>
                          <MobileIcon
                            color="var(--pink-9)"
                            height="16"
                            width="16"
                          />
                        </TextField.Slot>
                      </TextField.Root>
                    </Flex>
                    <Flex gap="5">
                      <Flex direction="column" gap="1" width="100%">
                        <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                          Curso
                        </Text>
                        <Select.Root>
                          <Select.Trigger placeholder="Curso" />
                          <Select.Content>
                            <Select.Item value="1ESO">1º ESO</Select.Item>
                            <Select.Item value="2ESO">2º ESO</Select.Item>
                            <Select.Item value="3ESO">3º ESO</Select.Item>
                            <Select.Item value="4ESO">4º ESO</Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </Flex>
                      <Flex direction="column" gap="1" width="100%">
                        <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                          Grupo
                        </Text>
                        <Select.Root>
                          <Select.Trigger placeholder="Grupo" />
                          <Select.Content>
                            <Select.Item value="GA">A</Select.Item>
                            <Select.Item value="GB">B</Select.Item>
                            <Select.Item value="GC">C</Select.Item>
                            <Select.Item value="GD">D</Select.Item>
                          </Select.Content>
                        </Select.Root>
                      </Flex>
                    </Flex>
                    <Flex direction="column" gap="1">
                      <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                        Contraseña
                      </Text>
                      <TextField.Root placeholder="Contraseña">
                        <TextField.Slot>
                          <LockClosedIcon
                            color="var(--pink-9)"
                            height="16"
                            width="16"
                          />
                        </TextField.Slot>
                      </TextField.Root>
                    </Flex>
                    <Flex direction="column" gap="1">
                      <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                        Repite tu contraseña
                      </Text>
                      <TextField.Root placeholder="Repite la contraseña">
                        <TextField.Slot>
                          <LockClosedIcon
                            color="var(--pink-9)"
                            height="16"
                            width="16"
                          />
                        </TextField.Slot>
                      </TextField.Root>
                    </Flex>
                    <Button asChild size={{ initial: "3", lg: "4", xl: "5" }}>
                      <Link to="/registro">Regístrate</Link>
                    </Button>
                    <Text
                      as="p"
                      align="center"
                      size={{ initial: "1", lg: "1", xl: "2" }}
                    >
                      ¿Ya tienes cuenta?{" "}
                      <Link href="/login" weight="bold" underline="always">
                        Inicia sesión
                      </Link>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          </Box>
        </Box>

        <Box width={{ initial: "100%", md: "50%" }}>
          <img src={signupImage} alt="Registro" />
        </Box>
      </Flex>
    </Section>
  );
}
