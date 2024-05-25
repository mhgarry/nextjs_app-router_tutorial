import NextAuth from 'next-auth';
import { authConfig } from './auth.config'; /* import authorized config callback to be used in different middleware.  The authorized
callback is ued to recognize a user's already verified session */

export default NextAuth(authConfig); // export the NextAuth middleware with the authConfig object as a parameter to be used throughout application for state management among other functions such as login, logout, and session management

export const config = {
  //https://nextjs.org/docs/app/building-your-appliaction/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
