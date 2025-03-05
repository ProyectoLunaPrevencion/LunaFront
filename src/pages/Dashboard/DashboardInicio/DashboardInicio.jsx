import { InicioSection } from "../../Inicio/InicioSection/InicioSection";
import { HeaderDashboard } from "../../../components/HeaderDashboard/HeaderDashboard";
import { Flex, Box } from "@radix-ui/themes";

export function DashboardInicio() {
  return (
    <Box>
      <Flex>
        <HeaderDashboard />
        <Box>
          <InicioSection />
        </Box>
      </Flex>
    </Box>
  );
}
