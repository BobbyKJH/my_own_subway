import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom: nickStorage } = recoilPersist({
  key: "logIn/NickName",
  storage: localStorage,
});

const { persistAtom: menuStorage } = recoilPersist({
  key: "menu/List",
  storage: sessionStorage,
});

const { persistAtom: resultStorage } = recoilPersist({
  key: "result/Recipe",
  storage: localStorage,
});

export const nickSetting = atom({
  key: "setting/Nick",
  default: "",
  effects: [nickStorage],
});

export const menuUrl = atom({
  key: "menu/Url",
  default: "sandwich",
  effects: [menuStorage],
});