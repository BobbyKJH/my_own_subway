import { atom } from "recoil";

export const HeaderOpen = atom({
  key: "mobile",
  default: false,
});

export const menuUrl = atom({
  key: "menuUrl",
  default: "sandwich",
});
