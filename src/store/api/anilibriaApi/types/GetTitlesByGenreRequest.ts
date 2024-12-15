import { GenreType } from "utils/types";

export type GetTitlesByGenreRequest = {
  genreId: GenreType;
};

export type GetLatestReleases = {
  limit: number;
};
