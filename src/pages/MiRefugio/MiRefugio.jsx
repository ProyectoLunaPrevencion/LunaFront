import {
  Container,
  Box,
  Heading,
  Flex,
  Section,
  Text,
  Button,
  TextArea,
  Select,
} from "@radix-ui/themes";
import { Header } from "../../components/Header/Header.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { logIn as loginService } from "../../services/authService";
import { isAxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MiRefugio.css";
import "../../index.css";

export function MiRefugio() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await loginService(data);
      toast.success("¡Inicio de sesión exitoso!");
      navigate("/");
    } catch (error) {
      if (isAxiosError(error) && error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Error en el inicio de sesión");
      }
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Section p="0" className="mi-refugio">
        <Container>
          <Box p={{ initial: "5", xs: "7" }}>
            <Flex
              direction="column"
              gap={{ initial: "1", sm: "3" }}
              justify="center"
            >
              <Box>
                <Flex
                  direction="column"
                  gap={{ initial: "4", sm: "6" }}
                  justify="center"
                >
                  <Heading
                    as="h1"
                    size={{ initial: "8", sm: "9" }}
                    align="center"
                    color="pink"
                  >
                    Mi Refugio
                  </Heading>
                  <Heading
                    as="h2"
                    size={{ initial: "6", sm: "7" }}
                    align="center"
                    style={{ color: "var(--orange-9)" }}
                    weight="regular"
                  >
                    Exprésanos qué te preocupa
                  </Heading>
                </Flex>
              </Box>
              <Box>
                <Flex
                  width="100%"
                  align="center"
                  justify="center"
                  direction={{ initial: "column", lg: "row" }}
                >
                  <Box
                    width="100%"
                    p={{ initial: "5", xs: "7" }}
                    maxWidth="50rem"
                  >
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
                          align="center"
                          gap={{ initial: "3", sm: "4" }}
                          p="0"
                          width="100%"
                        >
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ width: "100%" }}
                          >
                            <Flex
                              direction="column"
                              gap={{ initial: "3", xs: "4" }}
                              width="100%"
                            >
                              <Box width="100%">
                                <Flex direction="column" gap="1" width="100%">
                                  <Text
                                    as="p"
                                    size={{ initial: "2", lg: "3", xl: "5" }}
                                  >
                                    ¿Cuándo pasó?
                                  </Text>
                                  <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    wrapperClassName="date-picker-wrapper"
                                    className="date-picker-input"
                                  />
                                </Flex>
                              </Box>
                              <Box width="100%">
                                <Flex direction="column" gap="1" width="100%">
                                  <Text
                                    as="p"
                                    size={{ initial: "2", lg: "3", xl: "5" }}
                                  >
                                    ¿Cúal es el motivo?
                                  </Text>
                                  <Select.Root
                                    size={{ initial: "2", lg: "3", xl: "3" }}
                                  >
                                    <Select.Trigger
                                      id="motivo"
                                      placeholder="Motivo"
                                    />
                                    <Select.Content>
                                      <Select.Item value="ACOSO">
                                        Acoso
                                      </Select.Item>
                                      <Select.Item value="MALESTAR_EMOCIONAL">
                                        Malestar emocional
                                      </Select.Item>
                                      <Select.Item value="PROBLEMA_ACADEMICO">
                                        Problema Académico
                                      </Select.Item>
                                      <Select.Item value="OTROS">
                                        Otros
                                      </Select.Item>
                                    </Select.Content>
                                  </Select.Root>
                                </Flex>
                              </Box>
                              <Box width="100%">
                                <Flex direction="column" gap="1" width="100%">
                                  <Text
                                    as="p"
                                    size={{ initial: "2", lg: "3", xl: "5" }}
                                  >
                                    ¿Dónde ha pasado?
                                  </Text>
                                  <Select.Root
                                    size={{ initial: "2", lg: "3", xl: "3" }}
                                  >
                                    <Select.Trigger
                                      id="donde_lo_vio"
                                      placeholder="Dónde lo has visto"
                                    />
                                    <Select.Content>
                                      <Select.Item value="EN_CLASE">
                                        En clase
                                      </Select.Item>
                                      <Select.Item value="EN_PATIO">
                                        En el patio
                                      </Select.Item>
                                      <Select.Item value="EN_PASILLOS">
                                        En el pasillo
                                      </Select.Item>
                                      <Select.Item value="EN_REDES_SOCIALES">
                                        Por redes sociales
                                      </Select.Item>
                                      <Select.Item value="OTROS">
                                        Otros
                                      </Select.Item>
                                    </Select.Content>
                                  </Select.Root>
                                </Flex>
                              </Box>
                              <Box width="100%">
                                <Flex direction="column" gap="1" width="100%">
                                  <Text
                                    as="p"
                                    size={{ initial: "2", lg: "3", xl: "5" }}
                                  >
                                    ¿Qué ha pasado?
                                  </Text>
                                  <TextArea
                                    size={{ initial: "2", lg: "3", xl: "3" }}
                                    id="descripcion"
                                    placeholder="Describe lo ocurrido"
                                  />
                                </Flex>
                              </Box>

                              <Button
                                size={{ initial: "3", lg: "4", xl: "5" }}
                                type="submit"
                              >
                                Enviar
                              </Button>
                            </Flex>
                          </form>
                        </Flex>
                      </Container>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Section>
    </>
  );
}
