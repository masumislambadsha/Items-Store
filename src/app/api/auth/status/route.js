import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Check if the auth token cookie exists
    const authToken = request.cookies.get("auth-token");

    const isAuthenticated =
      authToken && authToken.value === "authenticated-user-token";

    return NextResponse.json({
      success: true,
      isAuthenticated,
      user: isAuthenticated
        ? {
            email: "admin@itemstore.com",
            name: "Admin User",
            role: "admin",
          }
        : null,
    });
  } catch (error) {
    console.error("Auth status error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
