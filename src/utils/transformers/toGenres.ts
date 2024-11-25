import { isGenre } from "utils/helpers";
import { Genre } from "utils/types";
import { toArray } from "./index";

export const toGenres = (value: unknown) => {
  return toArray(value).reduce<Genre[]>((acc, item) => {
    if (isGenre(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
};
