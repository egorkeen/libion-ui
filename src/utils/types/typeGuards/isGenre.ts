import { Genre } from "utils/types";
import { isRecord } from "../../helpers/index";

export const isGenre = (value: unknown): value is Genre => {
  if (isRecord(value) && isRecord(value.image)) {
    return (
      typeof value.id === "number" &&
      typeof value.name === "string" &&
      typeof value.total_releases === "number" &&
      typeof value.image.preview === "string" &&
      typeof value.image.thumbnail === "string"
    );
  }

  return false;
};
