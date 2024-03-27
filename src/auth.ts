import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import config from './config';

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/login',
        newUser: '/register',
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                
                try {
                    const authResponse = await fetch(`${config}/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userID: credentials.username,
                            password: credentials.password
                        }),
                    })

                    if (!authResponse.ok) {
                        return null
                    }

                    const response = await authResponse.json()
                    const user = response.user;
                    console.log('성공', user)
                    
                    return {
                        id: user.userID,
                        name: user.userID,
                        image: user.image,
                        ...response
                    }
                } catch (e) {
                    console.error(e)
                }
            },
        })
    ]
});