import { FETCH_OPTIONS } from "@/enum";
import { fetchAPI } from "@/service";
import { CallbacksOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const getCustomProvider = () => {
  return CredentialsProvider({
    name: "credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      const params = {
        login: credentials?.username,
        password: credentials?.password,
      };

      const { data, error } = await fetchAPI({
        method: FETCH_OPTIONS.POST,
        path: "/auth/login",
        bodyRequest: JSON.stringify(params),
      });

      if (error) {
        console.error("Login error:", error);
        return null;
      }

      return data as any;
    },
  });
};

export const sessionCallback: CallbacksOptions["session"] = async ({
  session,
}) => {
  return session;
};

export const jwtCallback: CallbacksOptions["jwt"] = async ({ token, user }) => {
  return token;
};

export const redirectCallback: CallbacksOptions["redirect"] = () => {
  return "/";
};
