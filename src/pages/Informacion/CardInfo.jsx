import { Box, Flex, Text, Card } from "@radix-ui/themes";
import PropTypes from "prop-types";

export function CardInfo({ Icon, title, description }) {
  return (
    <Box maxWidth="650px">
      <Card>
        <Flex gap="4" align="center">
          <Icon width="35" height="35" color="var(--orange-9)"></Icon>
          <Box>
            <Text
              as="div"
              size={{
                initial: "2",
                lg: "3",
                xl: "4",
              }}
              weight="bold"
              style={{ color: "var(--orange-9)" }}
            >
              {title}
            </Text>
            <Text
              as="div"
              size={{
                initial: "2",
                lg: "3",
                xl: "4",
              }}
              color="gray"
            >
              {description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}

CardInfo.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
