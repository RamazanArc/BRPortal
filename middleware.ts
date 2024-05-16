import { NextResponse } from "next/server";

export function middleware(req: NextResponse) {
  const token = req.cookies.get("token"); // Replace 'token' with the name of your token cookie

  if (!token) {
    // Redirect to login page if token is not found
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  // Allow request to proceed if token is found
  return NextResponse.next();
}

// Specify the paths where the middleware should apply
export const config = {
  matcher: ["/Dashboard/"], // Apply to these paths
};
