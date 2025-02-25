import {
  Section,
  Flex,
  Box,
  Container,
  Heading,
  Text,
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
import { useForm } from "react-hook-form";

import { Input } from "./components/Input/Input";
import { useNavigate } from "react-router-dom";
import { Registro as registroService } from "../../services/authService";
import { isAxiosError } from "axios";
import { toast } from "react-hot-toast";

export function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registroService(data);

      toast.success("¡Registro exitoso! Ahora inicia tu sesión");
      navigate("/");
    } catch (error) {
      if (
        isAxiosError(error) &&
        error.response?.data?.email?.includes(
          "Ya existe Usuario con este email."
        )
      ) {
        toast.error("Ya existe un usuario con este email");
      }
      console.error(error);
    }
  };

  const password = watch("password", "");

  const curso = watch("curso");
  const grupo = watch("grupo");

  return (
    <Section p="0">
      <Flex
        width="100%"
        height={{ initial: "100%", lg: "100vh" }}
        align="center"
        justify="center"
        direction={{ initial: "column", lg: "row" }}
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex direction="column" gap={{ initial: "3", xs: "4" }}>
                      <Flex
                        gap={{ initial: "3", xs: "5" }}
                        direction={{ initial: "column", xs: "row" }}
                      >
                        <Input
                          id="nombre"
                          placeholder="Nombre"
                          title="Nombre"
                          registerProps={register("nombre", {
                            required: "El nombre es obligatorio",
                            pattern: {
                              value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                              message:
                                "El nombre solo puede contener letras y espacios",
                            },
                          })}
                          errorMessage={errors.nombre?.message}
                          Icon={PersonIcon}
                        />
                        <Input
                          id="apellidos"
                          placeholder="Apellidos"
                          title="Apellidos"
                          registerProps={register("apellidos", {
                            required: "El apellido es obligatorio",
                            pattern: {
                              value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                              message:
                                "El apellido solo puede contener letras y espacios",
                            },
                          })}
                          errorMessage={errors.apellidos?.message}
                          Icon={PersonIcon}
                        />
                      </Flex>
                      <Input
                        id="email"
                        placeholder="Email"
                        title="Email"
                        infocontent="Solo se permiten correos de @colegiovirgendelcarmen.com"
                        registerProps={register("email", {
                          required: "El email es obligatorio",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@colegiovirgendelcarmen\.com$/,
                            message:
                              "El email debe pertenecer a @colegiovirgendelcarmen.com",
                          },
                        })}
                        errorMessage={errors.email?.message}
                        Icon={EnvelopeClosedIcon}
                      />
                      <Input
                        id="telefono"
                        placeholder="Teléfono"
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
                            onValueChange={(value) => setValue("curso", value)}
                            {...register("curso", {
                              required: "El curso es obligatorio",
                            })}
                          >
                            <Select.Trigger id="curso" placeholder="Curso" />
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
                            onValueChange={(value) => setValue("grupo", value)}
                            {...register("grupo", {
                              required: "El grupo es obligatorio",
                            })}
                          >
                            <Select.Trigger id="grupo" placeholder="Grupo" />
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
                      <Input
                        id="password"
                        placeholder="Contraseña"
                        title="Contraseña"
                        infocontent="Debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 caracter especial"
                        registerProps={register("password", {
                          required: "La contraseña es obligatoria",
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
                      <Input
                        id="passwordRepeat"
                        placeholder="Repite la contraseña"
                        title="Repite la contraseña"
                        infocontent="Debe coincidir con la contraseña anterior"
                        registerProps={register("passwordRepeat", {
                          required: "La contraseña no coincide",
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
                        Regístrate
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
                  </form>
                </Flex>
              </Flex>
            </Container>
          </Box>
        </Box>

        <Box width={{ initial: "100%", lg: "50%" }}>
          <img src={signupImage} alt="Registro" />
        </Box>
      </Flex>
    </Section>
  );
}
