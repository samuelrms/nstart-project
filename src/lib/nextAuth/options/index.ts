import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { AuthOptions, getServerSession } from "next-auth";

import {
  AGE_SESSION,
  COOKIE_SESSION_NAME,
  UPDATE_AGE_SESSION,
  secretKey,
} from "@/helpers/constants";
import { jwtCallback, sessionCallback } from "../auth";

export const authOptions: AuthOptions = {
  secret: secretKey,
  /**
   * TODO - Add your preferred provider
   */
  providers: [],

  callbacks: {
    jwt: jwtCallback,
    session: sessionCallback,
  },

  cookies: {
    sessionToken: {
      name: COOKIE_SESSION_NAME,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },

  session: {
    strategy: "jwt",
    maxAge: AGE_SESSION,
    updateAge: UPDATE_AGE_SESSION,
  },
};

function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export { auth };
