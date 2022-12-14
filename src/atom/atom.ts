import { atom, atomFamily } from "recoil";

interface IMake {
  img: string | undefined;
  name: string | undefined;
  eng_name: string | undefined;
  calorie: number | undefined;
}

interface ISauce {
  img: any[];
  name: any[];
  eng: any[];
  calorie: any[];
}

export const sideBarOpen = atom<boolean>({
  key: "mobile",
  default: false,
});

export const recipeOpen = atom<number>({
  key: "recipe/Open",
  default: 0,
});

export const makeResult = atom<boolean>({
  key: "result/Open",
  default: false,
});

export const makeError = atom<boolean>({
  key: "make/Error",
  default: false,
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

export const recipeSauce = atom<ISauce>({
  key: "make/Sauce",
  default: {
    img: [],
    name: [],
    eng: [],
    calorie: [],
  },
});
