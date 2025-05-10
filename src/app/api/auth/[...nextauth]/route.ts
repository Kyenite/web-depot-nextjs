import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@lib/db";
import bcrypt from 'bcrypt';

const handler = NextAuth(
    {
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    username: {
                        label: "Username:",
                        type: "text",
                        placeholder: "Juan_DelaCruz"
                    },
                    password: {
                        label: "Password:",
                        type: "password"
                    }
                },
                async authorize(credentials) {
                    await client.connect();
                    const db = client.db("test");
                    const userCollection = db.collection("users");
                    const user = await userCollection.findOne({ username: credentials?.username});
    
                    if(user && await bcrypt.compare(credentials?.password as string, user.password)) {
                        return {
                            id: user._id.toString(),
                            name: user.username
                        };
                    } else {
                        console.log("Invalid credentials");
                        return null;
                    }
                    
                },
            })
        ],
        theme: {
            colorScheme: "light",
            logo: "/images/icon.ico",
        },
        session: {
            strategy: "jwt"
        },
        callbacks: {
            async jwt({ token, user }) {
                if (user) {
                    token.id = user.id;
                    token.name = user.name;
                }
                return token;
            },
            async session({ session, token }) {
                // Attach token data to the session
                if (token) {
                  if (session.user) {
                      session.user.email = token.email;
                      session.user.name = token.name;
                  }
                }
                return session;
            }
        },
        pages: {
            signIn: "/admin/signin"
        }
    }
);

export { handler as GET, handler as POST };