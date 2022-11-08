import axios from "axios";

export const menuList = async (url: string) => {
  try {
    const { data } = await axios.get(
      `https://bobbykjh.github.io/subway/${url}.json`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
