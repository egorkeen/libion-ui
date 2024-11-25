import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toGenres } from "utils/transformers";
import { Genre } from "utils/types";

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
  }),
});

export const { useGetGenresQuery } = anilibriaApi;
