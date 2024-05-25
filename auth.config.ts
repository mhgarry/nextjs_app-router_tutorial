/*
	This file will configure the NextAuth library to create custom login logic for the application.
	NextAuth is a library that provides authentication services for Next.js applications.
	It is middleware for Nextjs applications that provides authentication services for the application.
	NextAuth is called before a request is completed, receives an object with the auth and request properties, and returns a boolean value.
	If the callback returns true, and the request is deemed authorized, the request is allowed to continue throughout the application architecture.
	if the callback returns false, the request is denied and the user is redirected to the login page.

*/

import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  }, // redirect user to custom login page rather NextAuth's default
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; // checks if user is logged in to application
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard'); // checks if users is on the dashboard
      if (isOnDashboard) {
        if (isLoggedIn) return true; // if a user is logged in and on the dashboard allow user access to the dashboard
        return false; // if a user is not logged in and isLoggedIn returns false immediately end the callback preventing any further action
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl)); // redirects a logged in user to the dashboard if they are not on the dashboard and takes the nextUrl as a parameter to redirect the user to the page they were trying to access before being validated and redirected to login page
      }
      return true; // if user is not logged in and not on the dashboard allow user to access the page they are trying to access without being redirected to the login page first
    },
  },
  providers: [], // add providers here. Providers are services that will be used ot authenticate and register users such as Google, Facebook, GitHub, etc.
} satisfies NextAuthConfig; // Satisfies the NextAuthConfig interface which is an object that contains the configuration options for the NextAuth library making sure it's set up correctly for security and functionality
