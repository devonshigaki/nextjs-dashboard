'use client';

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../lib/prisma"; // Assuming you are using Prisma for database

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your-email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Fetch the user from your database based on email and password
        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        
        if (!user) {
          throw new Error('No user found');
        }

        const isPasswordCorrect = credentials.password === user.password; // In a real case, use bcrypt
        if (!isPasswordCorrect) {
          throw new Error('Incorrect password');
        }

        return { id: user.id, email: user.email }; // Return user object for session
      }
    })
  ],
  pages: {
    signIn: '/auth/signin', // Redirect here on sign-in
    signOut: '/auth/signout', // Redirect here on sign-out
  },
  session: {
    jwt: true, // Use JSON Web Token (JWT) for session handling
  },
});
