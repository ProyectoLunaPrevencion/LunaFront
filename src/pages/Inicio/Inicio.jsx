import "./Inicio.css";
import Flower from "../../components/Flowers/Flower";
import { Flex, Text, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export function Inicio() {
  return (
    <Flex minWidth="100%" height="100vh" align="flex-start" justify="center">
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="6"
        width="40%"
        p="6"
      >
        <Flower />
        <Flex direction="column" textAlign="start" gap="3" align="start">
          <Text color="pink" weight="bold" size="6" className="blockquote">
            “Cuando la conversación con un otro se vuelve refugio. Eso, también
            es estar en casa.”
          </Text>
          <Text color="orange" size="4" className="cite">
            Ada Luz Márquez
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        gap="8"
        align="center"
        justify="center"
        className="right-welcome"
        width="100%"
        p="6"
      >
        <Flex direction="column" align="center" gap="6">
          <Text size="6">¿Te sientes triste continuamente?</Text>
          <Text size="6">
            ¿Crees que estás recibiendo maltrato por parte de alguna persona?
          </Text>
          <Text size="6">¿Tienes pensamientos negativos recurrentes?</Text>
          <Text size="6">Aquí estamos para ayudarte</Text>
        </Flex>
        <Button asChild variant="soft" size="3" className="login-button">
          <Link to="/registro">Regístrate</Link>
        </Button>
      </Flex>
    </Flex>
  );
}
