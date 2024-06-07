import { FETCH_OPTIONS } from "@/enum";
import { createQueryStrings } from "@/functions";
import { FetchRequestProps } from "./fetch.types";

/**
 * Fetch data from the server using Next.js fetch with cache
 */
export const fetchServer = async <BodyPost, ParamsGet, Res = unknown>({
  method = FETCH_OPTIONS.GET,
  path,
  bodyRequest: data,
  params,
  tags,
  forceCache = "force-cache",
  revalidate,
}: FetchRequestProps<BodyPost, ParamsGet>) => {
  let error: unknown;
  let loading = true;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: method !== FETCH_OPTIONS.GET ? JSON.stringify(data) : null,
    cache: forceCache,
    next: {
      tags,
      revalidate,
    },
  };

  try {
    const paramsAsRecord = params as unknown as Record<string, string>;
    const response = await fetch(
      `/api/${path}?${createQueryStrings(paramsAsRecord)}`,
      fetchOptions
    );

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
