import logoApp from "../../assets/images/Logotipo-AppLuna.png";
import "../Header/Header.css";
import { Flex, Box, Text, Button, DropdownMenu, Link } from "@radix-ui/themes";
import { useEffect, useState, useContext } from "react";
import { getUserById } from "../../services/authService";
import { AccessContext } from "../../main";
import { AvatarIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export function HeaderDashboard() {
  const { user } = useContext(AccessContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (user && user.id) {
          const userData = await getUserById(user.id);
          console.log("Datos usuario: ", userData);
          setUserName(userData.nombre);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserName();
  }, [user]);

  return (
    <Box
      p="5"
      style={{
        background: "var(--header)",
        boxShadow: "4px 0 2px -2px rgba(0, 0, 0, 0.2)",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <Flex
        direction="column"
        gap="7"
        height="100%"
        style={{ justifyContent: "space-evenly" }}
      >
        <Box>
          <Flex justify="center">
            <a href="/">
              <img height="50px" src={logoApp} alt="Logo Aplicación Luna" />
            </a>
          </Flex>
        </Box>
        <Box>
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap="4"
            style={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
          >
            <Link href="/dashboard/inicio" weight="bold">
              Inicio
            </Link>
            <Link href="/dashboard/informacion" weight="bold">
              Información
            </Link>
            <Link href="/dashboard/pizarra" weight="bold">
              Pizarra
            </Link>
            <Link href="/dashboard/crear-pizarra" weight="bold">
              Crear pizarra
            </Link>
            <Link href="/dashboard/usuarios" weight="bold">
              Ususarios
            </Link>
            <Link href="/dashboard/notificaciones" weight="bold">
              Notificaciones
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex justify="center">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="solid" style={{ whiteSpace: "nowrap" }}>
                  <AvatarIcon width="18" height="18"></AvatarIcon>
                  <Text as="p">{userName}</Text>
                  <ChevronDownIcon width="18" height="18"></ChevronDownIcon>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item color="pink">Ajustes</DropdownMenu.Item>
                <DropdownMenu.Item color="pink">
                  Cerrar sesión
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
