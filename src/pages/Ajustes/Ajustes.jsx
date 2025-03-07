import { Header } from "../../components/Header/Header";
import {
  Section,
  Flex,
  Box,
  Heading,
  Theme,
  Spinner,
  Tabs,
} from "@radix-ui/themes";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { FormularioUsuario } from "./components/FormularioUsuario";
import { CambiarPassword } from "./components/CambiarPassword";

export function Ajustes() {
  const { data: currentUser } = useCurrentUserQuery();

  return (
    <>
      <Header />
      <Theme accentColor="orange">
        <Section p="0">
          <Flex
            width="100%"
            align="center"
            justify="center"
            direction={{ initial: "column", lg: "row" }}
            p="8"
          >
            <Box maxWidth="40rem" width="100%">
              <Flex direction="column" align="center" justify="center">
                <Box
                  width="100%"
                  p={{ initial: "5", xs: "7" }}
                  style={{ background: "var(--main-orange)" }}
                >
                  <Flex align="center" justify="center">
                    <Heading
                      as="h1"
                      size={{ initial: "7", lg: "8", xl: "9" }}
                      align="center"
                      style={{ color: "white" }}
                    >
                      Mi perfil
                    </Heading>
                  </Flex>
                </Box>
                <Box
                  width="100%"
                  p={{ initial: "5", xs: "7" }}
                  style={{ paddingLeft: "0", paddingRight: "0" }}
                >
                  <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    gap="5"
                    width="100%"
                  >
                    <Heading
                      as="h2"
                      align={{ initial: "center", sm: "left" }}
                      size={{ initial: "5", sm: "6" }}
                      style={{ color: "var(--orange-9)" }}
                      weight="bold"
                      width="100%"
                    >
                      Información personal
                    </Heading>
                    <Flex
                      align="center"
                      gap={{ initial: "3", sm: "4" }}
                      width="100%"
                    >
                      {currentUser ? (
                        <Box width="100%">
                          <Tabs.Root defaultValue="personal">
                            <Flex direction="column" gap="4">
                              <Tabs.List wrap="wrap" justify="center">
                                <Tabs.Trigger value="personal">
                                  Información personal
                                </Tabs.Trigger>
                                <Tabs.Trigger value="clave">
                                  Cambiar la contraseña
                                </Tabs.Trigger>
                              </Tabs.List>
                              <Box>
                                <Tabs.Content value="personal">
                                  <FormularioUsuario
                                    currentUser={currentUser}
                                  />
                                </Tabs.Content>
                                <Tabs.Content value="clave">
                                  <CambiarPassword currentUser={currentUser} />
                                </Tabs.Content>
                              </Box>
                            </Flex>
                          </Tabs.Root>
                        </Box>
                      ) : (
                        <Spinner></Spinner>
                      )}
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Section>
      </Theme>
    </>
  );
}
