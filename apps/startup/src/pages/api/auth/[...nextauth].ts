import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

type TAuthObj = {
  isLoggedIn: boolean
  user: string
  accessToken: string
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      authorize(data) {
        const authObj = { ...data } as TAuthObj

        if (!authObj.isLoggedIn) return null

        return {
          ...JSON.parse(authObj.user),
          accessToken: authObj.accessToken
        } as any
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 8 * 60 * 60 // 8 hours
  },
  callbacks: {
    jwt: async ({ token, user }: any) => {
      // user is forwared from what is returned from the authorize function in the cred provider
      if (user) {
        token.accessToken = user.accessToken
      }

      return token
    },
    session: async ({ session, token }) => {
      // token is forwared from what is returned from the jwt callback
      // @ts-expect-error - forwarding the accessToken back to the client in the session object
      session.accessToken = token.accessToken

      return session
    }
  }
})
