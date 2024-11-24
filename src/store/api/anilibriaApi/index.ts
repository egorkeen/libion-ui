import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const anilibriaApi = createApi({
  reducerPath: "anilibriaApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ANILIBRIA_API }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => ({
        url: "anime/genres",
      }),
    }),
  }),
});

export const { useGetGenresQuery } = anilibriaApi;
