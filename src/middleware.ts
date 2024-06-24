import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { BACKEND_URL } from "@/utils/commonConst";

async function fetchUser(accessToken: String) {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/verify-access-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accessToken: accessToken,
      }),
      credentials: "include",
    });

    return res.json();
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    // throw error; // Chuyển tiếp lỗi để xử lý ở phía gọi hàm
  }
}

export async function middleware(request: NextRequest) {
  const cookie = request.headers.get("Cookie");
  let currentUserCookieValue;

  // Kiểm tra nếu cookie tồn tại và không rỗng
  if (cookie) {
    // Phân tách các cookie thành một mảng các cặp key-value
    const cookiePairs = cookie.split(";").map((pair) => pair.trim().split("="));

    // Tìm giá trị của cookie có tên là "currentUser"
    const currentUserCookie = cookiePairs.find(
      ([name, value]) => name === "currentUser"
    );

    // Nếu cookie "currentUser" được tìm thấy, lấy giá trị của nó
    if (currentUserCookie) {
      [, currentUserCookieValue] = currentUserCookie; // Lấy giá trị của cookie "currentUser"
    }
  }
  // console.log("currentUserCookie", currentUserCookieValue);
  const res = await fetchUser(currentUserCookieValue);
  // console.log("res", JSON.stringify(res));

  // Nếu đường dẫn bắt đầu bằng "/admin" thì kiểm tra res
  // console.log("request.nextUrl.pathname", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Nếu token chính xác
    if (res.status == 200) {
      const { user_role } = res.data;
      // Nếu role là "admin" thì cho phép truy cập
      // console.log("user_role", user_role);
      if (user_role === "admin") return NextResponse.next();
      // Nếu role không phải là "admin" thì chuyển hướng về trang đăng nhập của admin
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Nếu token chính xác
  if (res.status == 200) {
    // Nếu đường dẫn bắt đầu không bắt đầu bằng "/admin" thì cho phép truy cập
    return NextResponse.next();
  }

  // Nếu token không chính xác thì chuyển hướng về trang đăng nhập của customer
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/(account/.*|cart|notifications|order-information|admin.*)",
};
