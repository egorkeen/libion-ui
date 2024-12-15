import { isTitle } from "src/utils/types/typeGuards/isTitle";
import { toArray } from "utils/transformers";
import { Genre, isGenre, Title } from "utils/types";

export const toGenres = (value: unknown) => {
  return toArray(value).reduce<Genre[]>((acc, item) => {
    if (isGenre(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
};

export const toLatestReleases = (value: unknown) => {
  console.log(value);
  return toArray(value).reduce<Title[]>((acc, item) => {
    console.log(item);
    if (isTitle(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
};
