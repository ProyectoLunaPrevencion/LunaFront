import { Flex, TextField, Text, Tooltip } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import PropTypes from "prop-types";

export function InputAjustes({
  title,
  infocontent,
  id,
  placeholder,
  registerProps,
  errorMessage,
  Icon,
  type = "text",
}) {
  return (
    <Flex direction="column" gap="1" width="100%">
      <Flex gap="1" align="center">
        <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
          {title}
        </Text>
        {infocontent ? (
          <Tooltip content={infocontent}>
            <InfoCircledIcon color="grey" height="16" width="16" />
          </Tooltip>
        ) : null}
      </Flex>
      <TextField.Root
        id={id}
        placeholder={placeholder}
        {...registerProps}
        type={type}
      >
        <TextField.Slot>
          <Icon color="var(--orange-9)" height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <Text as="span" color="red" size="1">
        {errorMessage}
      </Text>
    </Flex>
  );
}

InputAjustes.propTypes = {
  title: PropTypes.string.isRequired,
  infocontent: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  registerProps: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  type: PropTypes.string,
};
