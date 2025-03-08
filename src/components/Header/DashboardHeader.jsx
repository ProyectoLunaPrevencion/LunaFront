import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { Header } from "./Header";

const COMMON_ITEMS = [
  { label: "INICIO", href: "/dashboard" },
  { label: "INFORMACIÓN", href: "/dashboard/informacion" },
  {
    label: "PIZARRA",
    href: "/dashboard/pizarra",
  },
];

const ALLOWED_ROLES = ["ORIENTACION"];

export function DashboardHeader() {
  const { data: currentUser } = useCurrentUserQuery();

  if (ALLOWED_ROLES.includes(currentUser?.rol)) {
    return (
      <Header
        logoUrl={"/"}
        navItems={[
          ...COMMON_ITEMS,
          {
            label: "NOTIFICACIONES",
            href: "/dashboard/notificaciones",
          },
          {
            label: "USUARIOS",
            href: "/dashboard/usuarios",
          },
        ]}
      />
    );
  }

  return <Header logoUrl={"/dashboard"} navItems={COMMON_ITEMS} />;
}
