import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useRecoilValue } from "recoil";

import { menuUrl } from "../atom/persistAtom";

import { recipeOpen } from "../atom/atom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const menu = useRecoilValue(menuUrl);
  const menuList = useRecoilValue(recipeOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, menu, menuList]);

  return null;
};

export default ScrollToTop;
