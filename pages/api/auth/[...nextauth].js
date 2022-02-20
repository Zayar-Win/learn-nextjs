import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: "2eabfe55cd7dc0eab685",
      clientSecret:
        "cb87a72d6644190380c0ccf4e60d94f04586e93a",
    }),
  ],
});
