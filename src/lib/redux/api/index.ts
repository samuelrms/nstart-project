import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FETCH_OPTIONS } from "@/helpers/enum";
import { QueryArgs } from "@/types";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

/**
 * ANCHOR - Configuration template, don't change it if you don't know what you're doing
 */
export const apiServiceRedux = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    dynamicQuery: builder.query<unknown, QueryArgs>({
      query: ({ path, method = FETCH_OPTIONS.GET, params, body }) => ({
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

/**
 * ANCHOR - Configuration template, don't change it if you don't know what you're doing
 */
export const selectDynamicQueryResult = (args: {
  path: string;
  method?: FETCH_OPTIONS;
}) =>
  createSelector(
    (state: RootState) =>
      apiServiceRedux.endpoints.dynamicQuery.select({
        path: args.path,
        method: args.method,
      })(state),
    (queryResult) => queryResult
  );
