import { Box, Heading, Flex, Text } from "@radix-ui/themes";
import { CardInfo } from "./CardInfo";
import PropTypes from "prop-types";
import {
  BookmarkIcon,
  ChatBubbleIcon,
  ExclamationTriangleIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

export function TiposSaludMental({
  title,
  descriptions,
  image,
  altImage,
  subtitle,
  subdescriptions,
  subsubdescriptions,
}) {
  return (
    <Box>
      <Flex direction="column" gap="2">
        <Box>
          <Flex
            direction={{ initial: "column", sm: "row" }}
            justify="center"
            align="center"
          >
            <Box>
              <Flex
                direction="column"
                gap={{ initial: "3", sm: "4" }}
                justify="center"
              >
                <Heading
                  as="h3"
                  size={{ initial: "6", sm: "7" }}
                  color="pink"
                  weight="bold"
                  align={{ initial: "center", sm: "left" }}
                >
                  {title}
                </Heading>
                <Box>
                  <Flex
                    justify="center"
                    direction="column"
                    gap={{ initial: "3", sm: "4" }}
                  >
                    {descriptions.map((description) => (
                      <Text
                        key={
                          typeof description === "string"
                            ? description.slice(0, 20)
                            : Math.random().toString(36).substring(2, 11)
                        }
                        as="p"
                        color="gray"
                        size={{ initial: "3", lg: "4", xl: "5" }}
                        align={{ initial: "center", sm: "left" }}
                      >
                        {description}
                      </Text>
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex wrap="wrap" justify="center">
                <img
                  src={image}
                  alt={altImage}
                  style={{
                    maxWidth: "350px",
                    maxHeight: "200px",
                    filter: "brightness(1)",
                    mixBlendMode: "multiply",
                  }}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
        {subtitle && (
          <Box>
            <Flex direction="column" gap={{ initial: "3", sm: "4" }}>
              <Heading
                as="h4"
                size={{ initial: "5", sm: "6" }}
                weight="bold"
                align={{ initial: "center", sm: "left" }}
                style={{ marginTop: "1rem", color: "var(--orange-9)" }}
              >
                {subtitle}
              </Heading>
              <Box>
                <Flex
                  justify="center"
                  direction="column"
                  gap={{ initial: "3", sm: "4" }}
                >
                  {subdescriptions.map((subdescriptions) => (
                    <Text
                      key={
                        typeof subdescriptions === "string"
                          ? subdescriptions.slice(0, 20)
                          : Math.random().toString(36).substring(2, 11)
                      }
                      as="p"
                      color="gray"
                      size={{ initial: "3", lg: "4", xl: "5" }}
                      align={{ initial: "center", sm: "left" }}
                    >
                      {subdescriptions}
                    </Text>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Flex gap="3" direction="column" align="center">
                  <CardInfo
                    Icon={Pencil2Icon}
                    title="Control"
                    description="Tu pareja quiere decidir por ti (ropa, amistades, redes sociales)"
                  ></CardInfo>
                  <CardInfo
                    Icon={ChatBubbleIcon}
                    title="Celos excesivos"
                    description="No confía en ti y te prohíbe hablar con otras personas"
                  ></CardInfo>
                  <CardInfo
                    Icon={ExclamationTriangleIcon}
                    title="Falta de respeto"
                    description="Insultos, burlas o humillaciones"
                  ></CardInfo>
                  <CardInfo
                    Icon={BookmarkIcon}
                    title="Manipulación emocional"
                    description="Te hace sentir culpable o te amenaza con dejarte si no haces lo que quiere"
                  ></CardInfo>
                </Flex>
              </Box>
              <Box>
                <Flex
                  justify="center"
                  direction="column"
                  gap={{ initial: "3", sm: "4" }}
                >
                  {subsubdescriptions.map((subsubdescriptions) => (
                    <Text
                      key={
                        typeof subsubdescriptions === "string"
                          ? subsubdescriptions.slice(0, 20)
                          : Math.random().toString(36).substring(2, 11)
                      }
                      as="p"
                      color="gray"
                      size={{ initial: "3", lg: "4", xl: "5" }}
                      align={{ initial: "center", sm: "left" }}
                    >
                      {subsubdescriptions}
                    </Text>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

TiposSaludMental.propTypes = {
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.node).isRequired, // Cambiamos a PropTypes.node para aceptar elementos React
  image: PropTypes.string,
  altImage: PropTypes.string,
  subtitle: PropTypes.string,
  subdescriptions: PropTypes.string,
  subsubdescriptions: PropTypes.string,
};
