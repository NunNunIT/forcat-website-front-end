// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Giao thức sử dụng (ở đây là HTTPS)
        hostname: "images.unsplash.com", // Thêm hostname của Unsplash
        port: "", // Không cần chỉ định cổng
        pathname: "/**", // Đường dẫn cụ thể của hình ảnh (ở đây là tất cả các đường dẫn)
      },
      {
        protocol: "https", // Giao thức sử dụng (ở đây là HTTPS)
        hostname: "images.pexels.com", // Thêm hostname của Pexels
        port: "", // Không cần chỉ định cổng
        pathname: "/**", // Đường dẫn cụ thể của hình ảnh (ở đây là tất cả các đường dẫn)
      },
    ],
  },
};
