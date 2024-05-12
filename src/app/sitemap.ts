// import libs
import { MetadataRoute } from "next";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const productsRes = await fetch(
      `${BACKEND_URL}/productList/search?searchKey=`
    );
    const jsonRes = await productsRes.json();
    const products = jsonRes.data.searchProducts;
    const productEntries: MetadataRoute.Sitemap = products.map(
      (item, index) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${item.product_slug}?pid=${item.product_id_hashed}`,
        lastModified: new Date(item.updatedAt),
      })
    );

    const newsRes = await fetch(`${BACKEND_URL}/articles/unlimited`);
    const newResJson = await newsRes.json();
    const news = newResJson.data;
    const newEntries: MetadataRoute.Sitemap = news.map((item, index) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/news/${item.article_slug}?aid=${item.article_id_hashed}`,
      lastModified: new Date(item.updatedAt),
    }));

    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/term-of-use`,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/category`,
        priority: 0.9,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/news`,
        priority: 0.9,
        changeFrequency: "daily",
      },
      ...productEntries,
      ...newEntries,
    ];
  } catch (err) {
    // console.log(err);
    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/term-of-use`,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/category`,
        priority: 0.9,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/news`,
        priority: 0.9,
        changeFrequency: "daily",
      },
    ];
  }
}
