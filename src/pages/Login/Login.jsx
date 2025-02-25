import {
  Section,
  Flex,
  Box,
  Container,
  Heading,
  Text,
  Button,
  Link,
} from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import signupImage from "../../assets/images/signup-image.jpg";
import { useForm } from "react-hook-form";
import { Input } from "../Registro/components/Input/Input";
import { useNavigate } from "react-router-dom";
import { logIn as loginService } from "../../services/authService";
import { isAxiosError } from "axios";
import { toast } from "react-hot-toast";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    <Section p="0">
      <Flex
        width="100%"
        height={{ initial: "100%", lg: "100vh" }}
        align="center"
        justify="center"
        direction={{ initial: "column", lg: "row" }}
      >
        <Box width="100%" p={{ initial: "5", xs: "7" }} maxWidth="35rem">
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
                  Inicia sesión
                </Heading>
                <Flex align="center" gap={{ initial: "3", sm: "4" }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex direction="column" gap={{ initial: "4", xs: "5" }}>
                      <Input
                        id="email"
                        placeholder="Email"
                        title="Email"
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
                        id="password"
                        placeholder="Contraseña"
                        title="Contraseña"
                        registerProps={register("password", {
                          required: "La contraseña es obligatoria",
                        })}
                        errorMessage={errors.password?.message}
                        Icon={LockClosedIcon}
                        type="password"
                      />
                      <Button
                        size={{ initial: "3", lg: "4", xl: "5" }}
                        type="submit"
                      >
                        Iniciar sesión
                      </Button>
                      <Text
                        as="p"
                        align="center"
                        size={{ initial: "1", lg: "1", xl: "2" }}
                      >
                        ¿Aún no tienes cuenta?{" "}
                        <Link href="/registro" weight="bold" underline="always">
                          Regístrate
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
          <img src={signupImage} alt="Inicio de sesión" />
        </Box>
      </Flex>
    </Section>
  );
}
