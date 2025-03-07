import { InicioSection } from "../../pages/Inicio/InicioSection/InicioSection";

import { Box } from "@radix-ui/themes";
import { Header } from "../Header/Header";

export function DashboardInicio() {
  return (
    <Box>
      <Header />
      <InicioSection />
    </Box>
  );
}
