import { withClerkMiddleware } from "@clerk/nextjs";

export default withClerkMiddleware();

export const config = {
  matcher: ["/((?!_next).*)"], // This applies middleware to all routes except static files.
};
