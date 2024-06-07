import { FETCH_OPTIONS } from "@/enum";

export type FetchRequestProps<
  BodyPost = any,
  ParamsGet = Record<string, string>
> = {
  method?: (typeof FETCH_OPTIONS)[keyof typeof FETCH_OPTIONS];
  path: string;
  bodyRequest?: BodyPost;
  params?: ParamsGet;
  tags?: NextFetchRequestConfig["tags"];
  forceCache?: RequestCache;
  revalidate?: NextFetchRequestConfig["revalidate"];
  baseURL?: string;
  headers?: HeadersInit;
};
