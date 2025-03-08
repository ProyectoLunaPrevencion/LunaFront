import { Header } from "./Header";

export function DashboardHeader() {
  return (
    <Header
      logoUrl={"/dashboard"}
      navItems={[
        { label: "INICIO", href: "/dashboard" },
        { label: "INFORMACIÓN", href: "/dashboard/informacion" },
        {
          label: "PIZARRA",
          href: "/pizarra",
        },
      ]}
    />
  );
}
