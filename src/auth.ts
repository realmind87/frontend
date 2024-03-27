import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            async authorize(credentials) {
                return null
            },
        })
    ]
});