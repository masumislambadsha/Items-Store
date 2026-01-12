import { NextResponse } from "next/server";

// Mock user credentials
const MOCK_USER = {
  email: "admin@itemstore.com",
  password: "admin123",
  name: "Admin User",
  role: "admin",
};

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check credentials
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      // Create response with success
      const response = NextResponse.json({
        success: true,
        message: "Login successful",
        user: {
          email: MOCK_USER.email,
          name: MOCK_USER.name,
          role: MOCK_USER.role,
        },
      });

      // Set authentication cookie
      response.cookies.set("auth-token", "authenticated-user-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
