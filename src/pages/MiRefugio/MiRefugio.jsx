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
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MiRefugio.css";
import "../../index.css";
import { createReporte } from "../../services/reportesServices";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import toast from "react-hot-toast";

export function MiRefugio() {
  const { data: currentUser } = useCurrentUserQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm();

  const onSubmit = async (data) => {
    if (!currentUser) {
      console.error("Usuario no autenticado");
      return;
    }

    const reporteData = {
      id_usuario: currentUser.idUsuario,
      descripcion: data.descripcion,
      motivo: data.motivo,
      donde_lo_vio: data.donde_lo_vio,
      fecha_reporte: data.fecha_reporte,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await createReporte(reporteData);
      console.log("Reporte creado:", response);
      toast.success("¡Información actualizada con éxito!");
    } catch (error) {
      console.error("Error al crear el reporte:", error);
      toast.error("Hubo un error al actualizar la información");
    }
  };

  const motivo = watch("motivo");
  const donde_lo_vio = watch("donde_lo_vio");

  return (
    <Section p="0" className="mi-refugio" minHeight="100vh">
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
                                <Controller
                                  control={control}
                                  name="fecha_reporte"
                                  render={({ field }) => (
                                    <DatePicker
                                      id="fecha_reporte"
                                      dateFormat="dd/MM/yyyy"
                                      wrapperClassName="date-picker-wrapper"
                                      className="date-picker-input"
                                      onChange={(date) => field.onChange(date)}
                                      selected={field.value}
                                    />
                                  )}
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
                                  onValueChange={(value) =>
                                    setValue("motivo", value)
                                  }
                                  {...register("motivo", {
                                    required: "Este campo es obligatorio",
                                  })}
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
                                {errors.motivo && !motivo && (
                                  <Text as="span" color="red" size="1">
                                    {errors.motivo.message}
                                  </Text>
                                )}
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
                                  onValueChange={(value) =>
                                    setValue("donde_lo_vio", value)
                                  }
                                  {...register("donde_lo_vio", {
                                    required: "Este campo es obligatorio",
                                  })}
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
                                    <Select.Item value="OTRO">
                                      Otros
                                    </Select.Item>
                                  </Select.Content>
                                </Select.Root>
                                {errors.donde_lo_vio && !donde_lo_vio && (
                                  <Text as="span" color="red" size="1">
                                    {errors.donde_lo_vio.message}
                                  </Text>
                                )}
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
                                  {...register("descripcion", {
                                    required: "Este campo es obligatorio",
                                  })}
                                />
                                <Text as="span" color="red" size="1">
                                  {errors.descripcion?.message}
                                </Text>
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
  );
}
