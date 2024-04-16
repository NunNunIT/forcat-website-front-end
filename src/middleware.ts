import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// Biến global để lưu trữ currentUser
let currentUser = null;

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  // console.log("Token", accessToken);

  if (!accessToken && (request.url.includes("/login") || request.url.includes("/register"))) {
    return NextResponse.next();
  } else if (accessToken && request.url.includes("/logout")) {
    clearCurrentUser()
    return NextResponse.next();
  } else if (accessToken) {
    try {
      const token = accessToken.value;
      // Giải mã token
      // const decoded = await jwtVerify(token, process.env.JWT_SECRET_KEY);
      // currentUser = decoded.payload;
      // console.log("Giải mã", currentUser);
      return NextResponse.next();
    } catch (error) {
      console.error("Token verification failed:", error);
    }
  } 

  // Nếu không có token hoặc giải mã thất bại, chuyển hướng đến trang đăng nhập
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher:
    "/(account/.*|cart|notifications/.*|order-information|login|register|logout)",
};

export function getCurrentUser() {
  return currentUser;
}

export function clearCurrentUser() {
  currentUser = null;
}
