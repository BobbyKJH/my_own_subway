import { atom, atomFamily, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

interface IMake {
  img: string | undefined;
  name: string | undefined;
  eng_name: string | undefined;
  calorie: number | undefined;
}

const { persistAtom: menuStorage } = recoilPersist({
  key: "menu/List",
  storage: sessionStorage,
});

const { persistAtom: nickStorage } = recoilPersist({
  key: "logIn/NickName",
  storage: localStorage,
});

export const nickSetting = atom({
  key: "setting/Nick",
  default: "",
  effects: [nickStorage],
});

export const sideBarOpen = atom({
  key: "mobile",
  default: false,
});

export const menuUrl = atom({
  key: "menu/Url",
  default: "sandwich",
  effects: [menuStorage],
});

export const makeSequence = atom({
  key: "make/Sequence",
  default: "1",
});

export const recipeFamily = atomFamily({
  key: "make/Recipe",
  default: (menu): IMake => {
    return {
      img: "",
      name: "",
      eng_name: "",
      calorie: 0,
    };
  },
});

export const recipeCalorie = selector({
  key: "recipe/calorie",
  get: ({ get }) => {
    const sandwich = get(recipeFamily("sandwich")).calorie;
    const bread = get(recipeFamily("bread")).calorie;
    const cheese = get(recipeFamily("cheese")).calorie;
    const sauce = get(recipeFamily("sauce")).calorie;
    return (
      sandwich !== undefined &&
      bread !== undefined &&
      cheese !== undefined &&
      sauce !== undefined &&
      sandwich + bread + cheese + sauce
    );
  },
});
