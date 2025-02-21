import { Flex, TextField, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";

export function Input({
  title,
  id,
  placeholder,
  registerProps,
  errorMessage,
  Icon,
}) {
  return (
    <Flex direction="column" gap="1" width={{ initial: "100%", sm: "40%" }}>
      <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
        {title}
      </Text>
      <TextField.Root id={id} placeholder={placeholder} {...registerProps}>
        <TextField.Slot>
          <Icon color="var(--pink-9)" height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <span>{errorMessage}</span>
    </Flex>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  registerProps: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
