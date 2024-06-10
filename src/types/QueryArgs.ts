import { FETCH_OPTIONS } from "@/enum";

export type QueryArgs<Params = {}, Body = {}> = {
  path: string;
  method?: FETCH_OPTIONS;
  params?: Params;
  body?: Body;
};
