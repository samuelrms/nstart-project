import { FETCH_OPTIONS } from "@/helpers/enum";

export type QueryArgs<Params = {}, Body = {}> = {
  path: string;
  method?: FETCH_OPTIONS;
  params?: Params;
  body?: Body;
};
