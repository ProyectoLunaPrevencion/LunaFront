import Flower from "../../components/Flowers/Flower";
import { Section, Flex, Blockquote } from "@radix-ui/themes";
import "./Inicio.css";
import { BannerBienvenida } from "./components/BannerBienvenida";

export function Inicio() {
  return (
    <Section p="0">
      <Flex
        minWidth="100%"
        height={{ initial: "100%", md: "100vh" }}
        align="center"
        justify="center"
        direction={{ initial: "column-reverse", md: "row" }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="6"
          width={{ initial: "100%", md: "40%" }}
          p="7"
        >
          <Flower />
          <Flex direction="column" gap="3" align="start">
            <Blockquote color="pink" size="5" italic="true">
              “Cuando la conversación con un otro se vuelve refugio. Eso,
              también es estar en casa.” <cite>Ada Luz Márquez</cite>
            </Blockquote>
          </Flex>
        </Flex>
        <BannerBienvenida />
      </Flex>
    </Section>
  );
}
