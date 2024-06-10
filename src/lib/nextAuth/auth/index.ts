import { CallbacksOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export type User = {
  username: string;
  password: string;
  id: string;
  // any other properties a user might have...
};

export const getCustomProvider = () => {
  return CredentialsProvider({
    name: "credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      if (credentials) {
        // Fetch or create a user based on the credentials
        const user: User = {
          id: "some-id", // You need to provide a valid id here
          username: credentials.username,
          password: credentials.password,
          // any other properties a user might have...
        };
        return user;
      }
      return null;
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
