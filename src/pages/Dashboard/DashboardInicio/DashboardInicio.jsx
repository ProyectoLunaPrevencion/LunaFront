import { InicioSection } from "../../Inicio/InicioSection/InicioSection";
import { HeaderDashboard } from "../../../components/HeaderDashboard/HeaderDashboard";
import { Flex, Box } from "@radix-ui/themes";

export function DashboardInicio() {
  return (
    <Box>
      <Flex>
        <HeaderDashboard />
        <Box style={{ flexBasis: "100%" }}>
          <InicioSection />
        </Box>
      </Flex>
    </Box>
  );
}
