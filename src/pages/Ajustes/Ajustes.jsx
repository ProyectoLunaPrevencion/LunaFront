import { Header } from "../../components/Header/Header";
import {
  Section,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Select,
  Theme,
  Skeleton,
} from "@radix-ui/themes";
import { InputAjustes } from "./components/InputAjustes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../services/authService"; // Asegúrate de tener esta función en tu servicio
import { isAxiosError } from "axios";
import { toast } from "react-hot-toast";
import { PersonIcon, MobileIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";

export function Ajustes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const { data: currentUser } = useCurrentUserQuery();

  const userId = currentUser?.id;
  const userName = currentUser?.nombre;
  const userLastName = currentUser?.apellidos;
  const userPhone = currentUser?.telefono;
  const userGrade = currentUser?.curso;
  const userClass = currentUser?.grupo;

  const onSubmit = async (data) => {
    try {
      await updateUser(userId, data); // Asegúrate de que esta función envíe los datos al backend y actualice la BBDD

      toast.success("¡Información actualizada con éxito!");
      navigate("/");
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error("Hubo un error al actualizar la información");
      }
      console.error(error);
    }
  };

  const password = watch("password", "");

  const curso = watch("curso");
  const grupo = watch("grupo");

  const getGradePlaceholder = (grade) => {
    switch (grade) {
      case "ESO1":
        return "1º ESO";
      case "ESO2":
        return "2º ESO";
      case "ESO3":
        return "3º ESO";
      case "ESO4":
        return "4º ESO";
      default:
        return "Curso";
    }
  };

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
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{ width: "100%" }}
                      >
                        <Flex
                          direction="column"
                          gap={{ initial: "3", xs: "4" }}
                          width="100%"
                        >
                          <InputAjustes
                            id="nombre"
                            placeholder={userName}
                            title="Nombre"
                            registerProps={register("nombre", {
                              pattern: {
                                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                                message:
                                  "El nombre solo puede contener letras y espacios",
                              },
                            })}
                            errorMessage={errors.nombre?.message}
                            Icon={PersonIcon}
                          />
                          <Skeleton>
                            <InputAjustes
                              id="apellidos"
                              placeholder={userLastName}
                              title="Apellidos"
                              registerProps={register("apellidos", {
                                pattern: {
                                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                                  message:
                                    "El apellido solo puede contener letras y espacios",
                                },
                              })}
                              errorMessage={errors.apellidos?.message}
                              Icon={PersonIcon}
                            />
                          </Skeleton>
                          <InputAjustes
                            id="telefono"
                            placeholder={userPhone || "Teléfono"}
                            title="Teléfono"
                            registerProps={register("telefono", {
                              pattern: {
                                value: /^\d{9}$/,
                                message:
                                  "El formato del teléfono es incorrecto. Debe tener 9 dígitos",
                              },
                            })}
                            errorMessage={errors.telefono?.message}
                            Icon={MobileIcon}
                          />
                          <Flex gap="5">
                            <Flex direction="column" gap="1" width="100%">
                              <Flex gap="1" align="center">
                                <Text
                                  as="p"
                                  size={{ initial: "2", lg: "3", xl: "5" }}
                                >
                                  Curso
                                </Text>
                              </Flex>
                              <Select.Root
                                onValueChange={(value) =>
                                  setValue("curso", value)
                                }
                                {...register("curso")}
                              >
                                <Select.Trigger
                                  id="curso"
                                  placeholder={getGradePlaceholder(userGrade)}
                                />
                                <Select.Content>
                                  <Select.Item value="ESO1">1º ESO</Select.Item>
                                  <Select.Item value="ESO2">2º ESO</Select.Item>
                                  <Select.Item value="ESO3">3º ESO</Select.Item>
                                  <Select.Item value="ESO4">4º ESO</Select.Item>
                                </Select.Content>
                              </Select.Root>
                              {errors.curso && !curso && (
                                <Text as="span" color="red" size="1">
                                  {errors.curso.message}
                                </Text>
                              )}
                            </Flex>
                            <Flex direction="column" gap="1" width="100%">
                              <Flex gap="1" align="center">
                                <Text
                                  as="p"
                                  size={{ initial: "2", lg: "3", xl: "5" }}
                                >
                                  Grupo
                                </Text>
                              </Flex>
                              <Select.Root
                                onValueChange={(value) =>
                                  setValue("grupo", value)
                                }
                                {...register("grupo", {})}
                              >
                                <Select.Trigger
                                  id="grupo"
                                  placeholder={userClass}
                                />
                                <Select.Content>
                                  <Select.Item value="A">A</Select.Item>
                                  <Select.Item value="B">B</Select.Item>
                                  <Select.Item value="C">C</Select.Item>
                                  <Select.Item value="D">D</Select.Item>
                                </Select.Content>
                              </Select.Root>
                              {errors.grupo && !grupo && (
                                <Text as="span" color="red" size="1">
                                  {errors.grupo.message}
                                </Text>
                              )}
                            </Flex>
                          </Flex>
                          <InputAjustes
                            id="password"
                            placeholder="Cambiar la contraseña"
                            title="Contraseña"
                            infocontent="Debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 caracter especial"
                            registerProps={register("password", {
                              minLength: {
                                value: 8,
                                message:
                                  "La contraseña debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 caracter especial",
                              },
                              pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
                                message:
                                  "La contraseña debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 caracter especial",
                              },
                            })}
                            errorMessage={errors.password?.message}
                            Icon={LockClosedIcon}
                            type="password"
                          />
                          <InputAjustes
                            id="passwordRepeat"
                            placeholder="Repite la contraseña"
                            title="Repite la contraseña"
                            infocontent="Debe coincidir con la contraseña anterior"
                            registerProps={register("passwordRepeat", {
                              validate: (value) =>
                                value === password ||
                                "Las contraseñas no coinciden",
                            })}
                            errorMessage={errors.passwordRepeat?.message}
                            Icon={LockClosedIcon}
                            type="password"
                          />
                          <Button
                            size={{ initial: "3", lg: "4", xl: "5" }}
                            type="submit"
                          >
                            Cambiar esta información
                          </Button>
                        </Flex>
                      </form>
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
