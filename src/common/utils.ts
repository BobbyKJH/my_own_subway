import { useLocation } from "react-router-dom";

export const pathNav = (content: string) => {
  const { pathname } = useLocation();
  if (content === "") {
    return pathname === `/`;
  }
  return pathname.includes(`/${content}`);
};

export const RecipeOutput = (idx: number) => {
  const output = JSON.parse(localStorage.getItem("result/Recipe") as string)
    .recipe[idx];
  return output;
};
