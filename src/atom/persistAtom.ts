import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom: nickStorage } = recoilPersist({
  key: "logIn/NickName",
  storage: localStorage,
});

const { persistAtom: resultStorage } = recoilPersist({
  key: "result/Recipe",
  storage: localStorage,
});

const { persistAtom: menuStorage } = recoilPersist({
  key: "menu/List",
  storage: sessionStorage,
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

export const recipeResult = atom({
  key: "recipe",
  default: {
    sandwich: {},
    bread: {},
    cheese: {},
    sauce: {},
  },
  effects: [resultStorage],
});
