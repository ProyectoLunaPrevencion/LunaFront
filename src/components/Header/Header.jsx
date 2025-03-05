import { useEffect, useState, useContext } from "react";
import logoApp from "../../assets/images/Logotipo-AppLuna.png";
import { getUserById } from "../../services/authService";
import { AccessContext } from "../../main";
import { Flex, Box, Text, Button, DropdownMenu, Link } from "@radix-ui/themes";
import "./Header.css";
import { AvatarIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export function Header() {
  const { user } = useContext(AccessContext);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        if (user?.id) {
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
    <Box width="100%" className="header">
      <Flex p="4" width="100%" align="center" justify="between">
        <Box>
          <Flex justify="start">
            <a href="/">
              <img height="50px" src={logoApp} alt="Logo Aplicación Luna" />
            </a>
          </Flex>
        </Box>
        <Box>
          <Flex justify="center" gap="4">
            <Link href="/" weight="bold" style={{ textTransform: "uppercase" }}>
              Inicio
            </Link>
            <Link
              href="/informacion"
              weight="bold"
              style={{ textTransform: "uppercase" }}
            >
              Información
            </Link>
          </Flex>
        </Box>
        <Box>
          {userName ? (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="solid">
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
          ) : (
            <Button variant="solid">
              <Link href="/login" underline="none" style={{ color: "white" }}>
                Inicia sesión
              </Link>
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
