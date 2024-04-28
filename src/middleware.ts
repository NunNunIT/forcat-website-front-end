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
  console.log("currentUserCookie", currentUserCookieValue);
  const res = await fetchUser(currentUserCookieValue);

  if (res.status == 200) {
    return NextResponse.next();
    // console.log("Fake AccessToken !!!");
    // const response = NextResponse.redirect(new URL("/login", request.url));
    // response.headers.set(
    //   "Set-Cookie",
    //   `currentUser=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; HttpOnly`
    // );
    // response.headers.set(
    //   "Set-Cookie",
    //   `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; HttpOnly`
    // );
    // return response;
  }
  return NextResponse.redirect(new URL("/login", request.url));

  // const accessTokenString = request.cookies.get("accessToken");
  // console.log("Thứ tao cần", accessTokenString)

  // if (
  //   !accessTokenString &&
  //   (request.url.includes("/login") || request.url.includes("/register"))
  // ) {
  //   return NextResponse.next();
  // } else if (accessTokenString && request.url.includes("/logout")) {
  //   return NextResponse.next();
  // } else if (accessTokenString) {
  //   const res = await fetchUser(accessTokenString.value);
  //   if (res.status !== 200 && res.success == true) {
  //     console.log("Fake AccessToken !!!");
  //     const response = NextResponse.redirect(new URL("/login", request.url));
  //     response.headers.set(
  //       "Set-Cookie",
  //       `currentUser=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; HttpOnly`
  //     );
  //     response.headers.set(
  //       "Set-Cookie",
  //       `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; HttpOnly`
  //     );
  //     return response;
  //   }
  //   return NextResponse.next();
  // }

  // Nếu không có token hoặc giải mã thất bại, chuyển hướng đến trang đăng nhập
  // return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/(account/.*|cart|notifications|order-information)",
};
