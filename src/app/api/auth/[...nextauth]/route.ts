import { authOptions } from "@/lib";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export const maxDuration = 300;

export { handler as GET, handler as POST };
