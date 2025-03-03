import {
  Section,
  Container,
  Box,
  Heading,
  Flex,
  Text,
  Grid,
  Tabs,
  Strong,
} from "@radix-ui/themes";
import {
  EnvelopeOpenIcon,
  CameraIcon,
  LockOpen1Icon,
  LaptopIcon,
  HandIcon,
  TargetIcon,
  ChatBubbleIcon,
  ExclamationTriangleIcon,
  CrossCircledIcon,
  CircleBackslashIcon,
} from "@radix-ui/react-icons";
import { CardInfo } from "./CardInfo";
import uno from "../../assets/images/forma-1.png";
import dos from "../../assets/images/forma-2.png";
import tres from "../../assets/images/forma-3.png";
import RRSS from "../../assets/images/RRSS.jpg";
import conflicto from "../../assets/images/Conflicto-fisico.jpg";

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
            <Box>
              <Flex
                direction="column"
                gap={{ initial: "8", sm: "9" }}
                align="center"
                justify="center"
              >
                <Heading
                  as="h2"
                  size={{ initial: "7", sm: "8" }}
                  align="center"
                  style={{ color: "var(--orange-9)" }}
                  weight="bold"
                >
                  Hablamos de conflicto cuando:
                </Heading>
                <Grid
                  columns={{ initial: "1", sm: "3" }}
                  gap="8"
                  width="100%"
                  style={{ justifyItems: "center", alignItems: "start" }}
                >
                  <Flex direction="column" align="center" gap="2">
                    <img width="150px" src={uno} alt="Registro" />
                    <Text
                      align="center"
                      as="p"
                      size={{ initial: "4", lg: "5", xl: "6" }}
                      style={{ color: "var(--orange-9)" }}
                      weight="bold"
                    >
                      Es repetitivo
                    </Text>
                    <Text
                      align="center"
                      as="p"
                      size={{ initial: "3", lg: "4", xl: "5" }}
                      style={{ color: "grey" }}
                    >
                      No es algo que pasa una sola vez, sino que se mantiene en
                      el tiempo.
                    </Text>
                  </Flex>
                  <Flex direction="column" align="center" gap="2">
                    <img width="150px" src={dos} alt="Registro" />
                    <Text
                      align="center"
                      as="p"
                      size={{ initial: "4", lg: "5", xl: "6" }}
                      style={{ color: "var(--orange-9)" }}
                      weight="bold"
                    >
                      Es intencional
                    </Text>
                    <Text
                      align="center"
                      as="p"
                      size={{ initial: "3", lg: "4", xl: "5" }}
                      style={{ color: "grey" }}
                    >
                      Alguien lo hace a propósito para afectar a la otra
                      persona.
                    </Text>
                  </Flex>
                  <Flex direction="column" align="center" gap="2">
                    <img width="150px" src={tres} alt="Registro" />
                    <Text
                      align="center"
                      as="p"
                      size={{ initial: "4", lg: "5", xl: "6" }}
                      style={{ color: "var(--orange-9)" }}
                      weight="bold"
                    >
                      Hay desigualdad
                    </Text>
                    <Text
                      align="center"
                      as="p"
                      size={{ initial: "3", lg: "4", xl: "5" }}
                      style={{ color: "grey" }}
                    >
                      Una persona tiene más poder que la otra (físico, social o
                      emocional) y lo usa para hacer daño.
                    </Text>
                  </Flex>
                </Grid>
                <Tabs.Root
                  defaultValue="RRSS"
                  style={{ width: "100%", overflowX: "auto" }}
                >
                  <Tabs.List wrap="wrap" justify="center">
                    <Tabs.Trigger value="RRSS">Conflicto en RRSS</Tabs.Trigger>
                    <Tabs.Trigger value="fisico">Conflicto Físico</Tabs.Trigger>
                    <Tabs.Trigger value="psicologico">
                      Conflicto Psicológico
                    </Tabs.Trigger>
                  </Tabs.List>

                  <Box pt="3">
                    <Tabs.Content value="RRSS">
                      <Flex
                        gap={{ initial: "4", md: "5", lg: "7" }}
                        direction="column"
                      >
                        <Text
                          as="p"
                          color="gray"
                          size={{ initial: "3", lg: "4", xl: "5" }}
                        >
                          Este tipo de conflicto ocurre cuando hay peleas o
                          problemas entre compañeros/as utilizando las redes
                          sociales o cualquier otro medio digital. Puede pasar
                          de muchas formas, como:
                        </Text>
                        <Flex align="center" justify="center">
                          <Box width="100%">
                            <Flex
                              gap={{ initial: "1", sm: "6", lg: "9" }}
                              width="100%"
                              align="center"
                              justify="center"
                              direction={{ initial: "column", sm: "row" }}
                            >
                              <Flex wrap="wrap">
                                <img
                                  src={RRSS}
                                  alt="Registro"
                                  style={{
                                    borderRadius: "var(--radius-2)",
                                    height: "300px",
                                    filter: "brightness(1)",
                                    mixBlendMode: "multiply",
                                  }}
                                />
                              </Flex>

                              <Flex gap="3" direction="column">
                                <CardInfo
                                  Icon={EnvelopeOpenIcon}
                                  title="Mensajes agresivos"
                                  description="Insultos, burlas o amenazas en chats"
                                ></CardInfo>
                                <CardInfo
                                  Icon={CameraIcon}
                                  title="Imágenes o videos humillantes"
                                  description="Publicar cosas para hacer sentir mal a
                                        alguien"
                                ></CardInfo>
                                <CardInfo
                                  Icon={LockOpen1Icon}
                                  title="Robo de cuentas"
                                  description="Alguien usa tu perfil sin permiso para
                                        hacer daño"
                                ></CardInfo>
                                <CardInfo
                                  Icon={LaptopIcon}
                                  title="Aislamiento digital"
                                  description="Excluir a alguien de grupos o ignorarlo
                                        a propósito"
                                ></CardInfo>
                              </Flex>
                            </Flex>
                          </Box>
                        </Flex>
                        <Text
                          as="p"
                          color="gray"
                          size={{ initial: "3", lg: "4", xl: "5" }}
                        >
                          El <Strong>objetivo</Strong> de estas acciones es
                          hacer sentir mal a la otra persona, dañando su
                          autoestima y provocando estrés o tristeza. Esto puede
                          afectar su vida diaria y la forma en que se relaciona
                          con los demás.
                        </Text>
                      </Flex>
                    </Tabs.Content>
                    <Tabs.Content value="fisico">
                      <Flex
                        gap={{ initial: "3", md: "5", lg: "7" }}
                        direction="column"
                      >
                        <Text
                          as="p"
                          color="gray"
                          size={{ initial: "3", lg: "4", xl: "5" }}
                        >
                          Es cuando una persona agrede a otra de forma directa,
                          causando daño a su cuerpo o sus cosas. Puede ocurrir
                          de distintas maneras, como:
                        </Text>

                        <Flex align="center" justify="center">
                          <Box width="100%">
                            <Flex
                              gap={{ initial: "1", md: "6", lg: "9" }}
                              width="100%"
                              align="center"
                              justify="center"
                              direction={{ initial: "column", md: "row" }}
                            >
                              <Flex wrap="wrap">
                                <img
                                  src={conflicto}
                                  alt="Registro"
                                  style={{
                                    borderRadius: "var(--radius-2)",
                                    height: "350px",
                                    filter: "brightness(1)",
                                    mixBlendMode: "multiply",
                                  }}
                                />
                              </Flex>

                              <Flex gap="3" direction="column">
                                <CardInfo
                                  Icon={HandIcon}
                                  title="Golpes o empujones"
                                  description="Peleas, empujones o cualquier contacto
                                        violento"
                                ></CardInfo>
                                <CardInfo
                                  Icon={TargetIcon}
                                  title="Lanzamiento de objetos"
                                  description="Tirar cosas para lastimar o asustar a
                                        alguien"
                                ></CardInfo>
                                <CardInfo
                                  Icon={ExclamationTriangleIcon}
                                  title="Robo o daño de pertenencias"
                                  description="Quitarle algo a alguien a la fuerza o
                                        destruir sus cosas"
                                ></CardInfo>
                                <CardInfo
                                  Icon={ChatBubbleIcon}
                                  title="Gestos o comentarios ofensivos"
                                  description="Burlas o expresiones que buscan hacer
                                        sentir mal a la otra persona"
                                ></CardInfo>
                              </Flex>
                            </Flex>
                          </Box>
                        </Flex>
                        <Text
                          as="p"
                          color="gray"
                          size={{ initial: "3", lg: "4", xl: "5" }}
                        >
                          Este tipo de conflicto no solo causa daño físico, sino
                          que también puede afectar la autoestima y el bienestar
                          emocional de la víctima.
                        </Text>
                      </Flex>
                    </Tabs.Content>
                    <Tabs.Content value="psicologico">
                      <Flex
                        gap={{ initial: "3", md: "5", lg: "7" }}
                        direction="column"
                      >
                        <Text
                          as="p"
                          color="gray"
                          size={{ initial: "3", lg: "4", xl: "5" }}
                        >
                          Es cuando una persona lastima a otra sin necesidad de
                          golpes, usando palabras, actitudes o comportamientos
                          que afectan su bienestar emocional. Puede suceder de
                          muchas formas, como:
                        </Text>

                        <Flex align="center" justify="center">
                          <Box width="100%">
                            <Flex
                              gap={{ initial: "1", md: "6", lg: "9" }}
                              width="100%"
                              align="center"
                              justify="center"
                              direction={{ initial: "column", md: "row" }}
                            >
                              <Flex wrap="wrap">
                                <img
                                  src={conflicto}
                                  alt="Registro"
                                  style={{
                                    borderRadius: "var(--radius-2)",
                                    height: "350px",
                                    filter: "brightness(1)",
                                    mixBlendMode: "multiply",
                                  }}
                                />
                              </Flex>

                              <Flex gap="3" direction="column">
                                <CardInfo
                                  Icon={ExclamationTriangleIcon}
                                  title="Insultos o amenazas"
                                  description="Decir cosas hirientes para hacer sentir
                                        mal a alguien"
                                ></CardInfo>
                                <CardInfo
                                  Icon={ChatBubbleIcon}
                                  title="Difamaciones o rumores"
                                  description="Inventar chismes para dañar la
                                        reputación de una persona"
                                ></CardInfo>
                                <CardInfo
                                  Icon={CircleBackslashIcon}
                                  title="Burlas o apodos ofensivos"
                                  description="Reírse de alguien constantemente por su
                                        apariencia, forma de ser o cualquier
                                        otra razón"
                                ></CardInfo>
                                <CardInfo
                                  Icon={CrossCircledIcon}
                                  title="Exclusión social"
                                  description="Ignorar o aislar a una persona solo por
                                        su origen, notas, forma de vestir o
                                        situación económica"
                                ></CardInfo>
                              </Flex>
                            </Flex>
                          </Box>
                        </Flex>
                        <Text
                          as="p"
                          color="gray"
                          size={{ initial: "3", lg: "4", xl: "5" }}
                        >
                          Este tipo de agresión puede generar mucha tristeza,
                          ansiedad y afectar la confianza en uno mismo.
                        </Text>
                      </Flex>
                    </Tabs.Content>
                  </Box>
                </Tabs.Root>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Section>
  );
}
