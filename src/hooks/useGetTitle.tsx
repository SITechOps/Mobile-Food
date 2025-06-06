import { useSegments } from "expo-router";

const TITLE_MAP: Record<string, string> = {
  home: "Início",
  menu: "Cardápio",
  profile: "Perfil",
  orders: "Pedidos",
  // Adicione outras rotas conforme necessário
};

export default function usePageTitle(defaultTitle = "Mobile Food") {
  const segments = useSegments();
  const currentRoute = segments.at(-1) || "home";

  return TITLE_MAP[currentRoute] || defaultTitle;
}
