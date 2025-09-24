import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/app/db/connectDB"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDB();
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          })
          await newUser.save();
        }
      }
      return true;
    },
    async session({ session, user, token }) {
      const currentUser = await User.findOne({ email: session.user.email });
      session.user.name = currentUser.username;
      return session
    },
  }
})

export { handler as GET, handler as POST }