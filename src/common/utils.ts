import { useLocation } from "react-router-dom";

export const pathNav = (content: string) => {
  const { pathname } = useLocation();
  if (content === "") {
    return pathname === `/`;
  }
  return pathname.includes(`/${content}`);
};
