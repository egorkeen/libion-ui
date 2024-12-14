import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toGenres } from "utils/transformers";
import { Genre, Title } from "utils/types";
import { GetTitlesByGenreRequest } from "./types";
import { BasePaginationResponse } from "./types/BasePaginationResponse";

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
  }),
});

export const { useGetGenresQuery, useGetTitlesByGenreQuery } = anilibriaApi;
