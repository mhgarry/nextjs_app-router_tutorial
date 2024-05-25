import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  }, // redirect user to custom login page rather NextAuth's default
};
