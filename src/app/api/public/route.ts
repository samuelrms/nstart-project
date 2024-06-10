import { FETCH_OPTIONS } from "@/enum";
import { fetchAPI } from "@/service";
import { NextRequest, NextResponse } from "next/server";

/**
 * @name GET
 * @description
 * This function is a route handler for the public API endpoint.
 * It fetches data from the Rick and Morty API and returns the data.
 * @param {NextRequest} _
 * @returns {Promise<NextResponse>}
 
 */
export async function GET(_: NextRequest) {
  try {
    const response = await fetchAPI({
      baseURL: "https://rickandmortyapi.com/api/character",
      method: FETCH_OPTIONS.GET,
      path: "",
    });

    if (response.error) {
      return NextResponse.json(
        {
          message: response.error,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(response.data, {
      status: 200,
    });
  } catch (error) {}

  return NextResponse.json(
    { message: "Hello, World!" },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
