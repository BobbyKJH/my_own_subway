import { atom, atomFamily, selector } from "recoil";

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

export const recipeResultOpen = atom<boolean>({
  key: "result/Open",
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

export const recipeCalorie = selector({
  key: "recipe/calorie",
  get: ({ get }) => {
    const sandwich = get(recipeFamily("sandwich")).calorie;
    const bread = get(recipeFamily("bread")).calorie;
    const cheese = get(recipeFamily("cheese")).calorie;
    return (
      sandwich !== undefined &&
      bread !== undefined &&
      cheese !== undefined &&
      sandwich + bread + cheese
    );
  },
});
