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
      {
        protocol: "https", // Giao thức sử dụng (ở đây là HTTPS)
        hostname: "res.cloudinary.com", // Thêm hostname của Cloudinary
        port: "", // Không cần chỉ định cổng
        pathname: "/**", // Đường dẫn cụ thể của hình ảnh (ở đây là tất cả các đường dẫn)
      },
      {
        protocol: "https", // Giao thức sử dụng (ở đây là HTTPS)
        hostname: "gcs.tripi.vn", // Thêm hostname
        port: "", // Không cần chỉ định cổng
        pathname: "/**", // Đường dẫn cụ thể của hình ảnh (ở đây là tất cả các đường dẫn)
      },
      {
        protocol: "https", // Giao thức sử dụng (ở đây là HTTPS)
        hostname: "gcs.tripi.vn", // Thêm hostname của gcs.tripi.vn (để hiển thị avater mặc định của user)
        port: "", // Không cần chỉ định cổng
        pathname: "/**", // Đường dẫn cụ thể của hình ảnh (ở đây là tất cả các đường dẫn)
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
