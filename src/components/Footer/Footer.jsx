import { Box, Flex, Text, Link } from "@radix-ui/themes";
import "./Footer.css";
import { HeartFilledIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import LogoCarmen from "../../assets/images/logo-virgen-del-carmen.webp";

export function Footer() {
  return (
    <Box className="footer" p="6">
      <Flex
        direction={{ initial: "column", xs: "row" }}
        justify="between"
        align="center"
        gap="6"
      >
        <Box>
          <Flex direction="column" gap="3">
            <Text
              as="p"
              weight="bold"
              size={{ initial: "4", md: "4", xl: "6" }}
            >
              Desarrolladores
            </Text>
            <Box>
              <Flex direction="column" gap="2">
                <Link
                  href="https://www.linkedin.com/in/elena-expósito-lara"
                  underline="hover"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecorationColor: "white",
                    textDecorationStyle: "dotted",
                  }}
                >
                  <Flex align="center" gap="2">
                    <LinkedInLogoIcon width="16" height="16"></LinkedInLogoIcon>
                    <Text as="p" size={{ initial: "2", md: "2", xl: "6" }}>
                      Elena Expósito Lara
                    </Text>
                  </Flex>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/daniel-ronda-morales-b5098321a/"
                  underline="hover"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecorationColor: "white",
                    textDecorationStyle: "dotted",
                  }}
                >
                  <Flex align="center" gap="2">
                    <LinkedInLogoIcon width="16" height="16"></LinkedInLogoIcon>
                    <Text as="p" size={{ initial: "2", md: "2", xl: "6" }}>
                      Daniel Ronda Morales
                    </Text>
                  </Flex>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" align="center" justify="center" gap="3">
            <img
              src={LogoCarmen}
              alt="Logo Colegio Virgen del Carmen"
              style={{
                maxWidth: "80px",
                maxHeight: "80px",
                borderRadius: "0.5rem",
              }}
            />
            <Text as="p" size="1">
              Hecho con <HeartFilledIcon width="10px" height="10px" /> para el
              Colegio Virgen del Carmen
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
