import logoApp from "../../assets/images/Logotipo-AppLuna.png";
import { Flex, Box, Text, Button, DropdownMenu, Link } from "@radix-ui/themes";
import "./Header.css";
import {
  AvatarIcon,
  ChevronDownIcon,
  DragHandleHorizontalIcon,
} from "@radix-ui/react-icons";
import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { cookies, SESSION_COOKIE } from "../../utils/cookieManager";
import PropTypes from "prop-types";

export function Header({ logoUrl, navItems }) {
  const { data: currentUser } = useCurrentUserQuery();

  const userName = currentUser?.nombre;

  const handleLogout = () => {
    cookies.remove(SESSION_COOKIE, { path: "/" });
    window.location.reload();
  };

  return (
    <Box width="100%" className="header">
      <Flex p="4" width="100%" align="center" justify="between">
        <Box>
          <Flex justify="start">
            <a href={logoUrl}>
              <img height="50px" src={logoApp} alt="Logo Aplicación Luna" />
            </a>
          </Flex>
        </Box>
        <Box display={{ initial: "none", md: "block" }}>
          <Flex justify="center" gap="4">
            {navItems.map((item) => (
              <Link href={item.href} weight="bold" key={item.label}>
                {item.label}
              </Link>
            ))}
          </Flex>
        </Box>
        <Box display={{ initial: "none", md: "block" }}>
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
                <Link href="/ajustes" underline="none">
                  <DropdownMenu.Item color="pink">Ajustes</DropdownMenu.Item>
                </Link>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                >
                  <DropdownMenu.Item color="pink">
                    Cerrar sesión
                  </DropdownMenu.Item>
                </button>
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
        <Box display={{ md: "none" }} height="40px">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button>
                <DragHandleHorizontalIcon width="30" height="100%" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Box>
                <Flex direction="column" p="2">
                  <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    gap="4"
                  >
                    {navItems.map((item) => (
                      <Link href={item.href} key={item.label}>
                        {item.label}
                      </Link>
                    ))}
                  </Flex>
                  <DropdownMenu.Separator />

                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger
                      style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        gap: "1rem",
                      }}
                    >
                      <Box>
                        <Flex gap="1" align="center" justify="center">
                          <AvatarIcon width="18" height="18"></AvatarIcon>
                          <Text as="p">{userName}</Text>
                        </Flex>
                      </Box>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent>
                      <Link href="/ajustes" underline="none">
                        <DropdownMenu.Item color="pink">
                          Ajustes
                        </DropdownMenu.Item>
                      </Link>
                      <button
                        onClick={handleLogout}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                        }}
                      >
                        <DropdownMenu.Item color="pink">
                          Cerrar sesión
                        </DropdownMenu.Item>
                      </button>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>
                </Flex>
              </Box>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
    </Box>
  );
}

Header.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired,
};
