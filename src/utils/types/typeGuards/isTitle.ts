import { toRecord } from "utils/transformers";
import { isGenre, Title } from "utils/types";
import { isRecord } from "../../helpers/index";

export const isTitle = (value: unknown): value is Title => {
  if (
    isRecord(value) &&
    isRecord(value.type) &&
    isRecord(value.name) &&
    isRecord(value.season) &&
    isRecord(value.poster) &&
    isRecord(value.poster.optimized) &&
    isRecord(value.age_rating) &&
    isRecord(value.publish_day)
  ) {
    const { type, name, season, poster, genres } = value;
    const optimized = toRecord(poster.optimized);

    return (
      typeof value.id === "number" &&
      typeof type.value === "string" &&
      typeof type.description === "string" &&
      typeof value.year === "number" &&
      typeof name.main === "string" &&
      typeof name.english === "string" &&
      (typeof name.alternative === "string" || name.alternative === null) &&
      Array.isArray(genres) &&
      genres.every(isGenre) &&
      typeof value.alias === "string" &&
      typeof season.value === "string" &&
      typeof season.description === "string" &&
      typeof poster.src === "string" &&
      typeof poster.thumbnail === "string" &&
      typeof optimized.src === "string" &&
      typeof optimized.thumbnail === "string" &&
      typeof value.fresh_at === "string" &&
      typeof value.created_at === "string" &&
      typeof value.updated_at === "string" &&
      typeof value.is_ongoing === "boolean" &&
      typeof value.age_rating.value === "string" &&
      typeof value.age_rating.label === "string" &&
      typeof value.age_rating.is_adult === "boolean" &&
      typeof value.age_rating.description === "string" &&
      typeof value.publish_day.value === "number" &&
      typeof value.publish_day.description === "string" &&
      (typeof value.description === "string" || value.description === null) &&
      (typeof value.notification === "string" || value.notification === null) &&
      (typeof value.episodes_total === "number" ||
        value.episodes_total === null) &&
      (typeof value.external_player === "string" ||
        value.external_player === null) &&
      typeof value.is_in_production === "boolean" &&
      typeof value.is_blocked_by_geo === "boolean" &&
      typeof value.episodes_are_unknown === "boolean" &&
      typeof value.is_blocked_by_copyrights === "boolean" &&
      typeof value.added_in_users_favorites === "number" &&
      (typeof value.average_duration_of_episode === "number" ||
        value.average_duration_of_episode === null)
    );
  }

  return false;
};
