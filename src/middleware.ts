import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { BACKEND_URL } from "@/utils/commonConst";
import Cookies from "js-cookie";

// Biến global để lưu trữ currentUser
let currentUser = null;

async function fetchUser(accessToken: String) {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/verify-access-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        accessToken: accessToken
      })
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    // Xử lý dữ liệu nhận được từ máy chủ
    return data.data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    throw error; // Chuyển tiếp lỗi để xử lý ở phía gọi hàm
  }
}

export async function middleware(request: NextRequest) {
  let accessTokenString = request.cookies.get("accessToken");
  console.log("Token", accessTokenString);

  if (!accessTokenString && (request.url.includes("/login") || request.url.includes("/register"))) {
    return NextResponse.next();
  } else if (accessTokenString && request.url.includes("/logout")) {
    clearCurrentUser()
    return NextResponse.next();
  } else if (accessTokenString) {
    try {
      // Giải mã token
      // const decoded = await jwtVerify(token, process.env.JWT_SECRET_KEY);
      // currentUser = decoded.payload;
      // console.log("Giải mã", currentUser);
      // currentUser = await fetchUser(accessTokenString.value)
      // Cookies.set("currentUser", currentUser._id, { expires: 7 });
      // console.log("Thông tin tuyệt mật:", currentUser, )
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
    "/(account/.*|cart|notifications|order-information|login|register|logout)",
};

export function getCurrentUser() {
  return currentUser;
}

export function clearCurrentUser() {
  currentUser = null;
}
