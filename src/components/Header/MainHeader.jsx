import { useCurrentUserQuery } from "../../hooks/queries/useCurrentUserQuery";
import { Header } from "./Header";

const COMMON_ITEMS = [
  { label: "INICIO", href: "/" },
  { label: "INFORMACIÓN", href: "/informacion" },
];

export function MainHeader() {
  const { data: currentUser } = useCurrentUserQuery();

  if (currentUser) {
    return (
      <Header
        logoUrl={"/"}
        navItems={[
          ...COMMON_ITEMS,
          {
            label: "MI REFUGIO",
            href: "/mi-refugio",
          },
          {
            label: "PIZARRA",
            href: "/pizarra",
          },
        ]}
      />
    );
  }

  return <Header logoUrl={"/"} navItems={COMMON_ITEMS} />;
}
