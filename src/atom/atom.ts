import { atom } from "recoil";

export const sideBarOpen = atom({
  key: "mobile",
  default: false,
});

export const menuUrl = atom({
  key: "menuUrl",
  default: "sandwich",
});
