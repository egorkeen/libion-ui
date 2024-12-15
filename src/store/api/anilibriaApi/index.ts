import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre, Title } from "utils/types";
import { GetLatestReleases, GetTitlesByGenreRequest } from "./types";
import { BasePaginationResponse } from "./types/BasePaginationResponse";
import { toGenres, toLatestReleases, toLatestReleasesUrl } from "./utils";

export const anilibriaApi = createApi({
  reducerPath: "anilibriaApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ANILIBRIA_API }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genre[], void>({
      query: () => ({
        url: "anime/genres",
      }),

      transformResponse: toGenres,
    }),
    getTitlesByGenre: builder.query<
      BasePaginationResponse<Title[]>,
      GetTitlesByGenreRequest
    >({
      query: (args) => ({
        url: `anime/genres/${args.genreId}/releases`,
      }),
    }),
    getLatestReleases: builder.query<Title[], GetLatestReleases>({
      query: (args) => ({
        url: toLatestReleasesUrl(args),
      }),
      transformResponse: toLatestReleases,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetTitlesByGenreQuery,
  useGetLatestReleasesQuery,
} = anilibriaApi;
