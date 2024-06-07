import { FETCH_OPTIONS } from "@/enum";
import { createQueryStrings } from "@/functions";
import { API_BASE } from "../../constants";
import { FetchRequestProps } from "./fetch.types";

/**
 * Fetch data from the API external
 * @type BodyPost - Request body typing model other than GET
 * @type ParamsGet - Model for typing request parameters (query string)
 * @type Res - Model of the response returned by the request
 */
export const fetchAPI = async <
  BodyPost extends BodyInit | undefined,
  ParamsGet,
  Res = unknown
>({
  method = FETCH_OPTIONS.GET,
  path,
  bodyRequest,
  params,
  tags,
  forceCache = "force-cache",
  baseURL = API_BASE,
  revalidate,
  headers = { "Content-Type": "application/json" },
}: FetchRequestProps<BodyPost, ParamsGet>) => {
  let error: unknown;
  let loading = true;

  const fetchOptions: RequestInit = {
    method,
    headers,
    body: method !== FETCH_OPTIONS.GET ? bodyRequest : null,
    cache: forceCache,
    next: {
      tags,
      revalidate,
    },
  };

  const paramsAsRecord = params as unknown as Record<string, string>;
  const hasParams = params ? `?${createQueryStrings(paramsAsRecord)}` : ``;

  try {
    const response = await fetch(`${baseURL}${path}${hasParams}`, fetchOptions);

    const result = (await response.json()) as Res;
    loading = false;

    if (!response.ok) {
      return { error: result, loading, data: {} };
    }

    return { data: result, loading, error };
  } catch (error) {
    console.error("Erro na requisição:", error);
    loading = false;
    return { error, loading, data: {} };
  }
};
