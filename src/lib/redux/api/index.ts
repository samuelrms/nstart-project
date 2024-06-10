import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { QueryArgs } from "@/types";

export const apiServiceRedux = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    dynamicQuery: builder.query<unknown, QueryArgs>({
      query: ({ path, method = "GET", params, body }) => ({
        url: path,
        method,
        params,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useDynamicQueryQuery: useDynamicQuery } = apiServiceRedux;
