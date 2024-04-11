// import libs
import { MetadataRoute } from "next";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";
import { encryptData } from "@/utils/security";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productsRes = await fetch(
    `${BACKEND_URL}/productList/search?searchKey=`
  );
  const { products } = await productsRes.json();
  const productEntries: MetadataRoute.Sitemap = products.map((item, index) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${
      item.product_slug
    }?pid=${encryptData(item._id)}`,
    lastModified: new Date(item.updatedAt),
  }));

  const newsRes = await fetch(`${BACKEND_URL}/articles`);
  const newResJson = await newsRes.json();
  const news = newResJson.data;
  const newEntries: MetadataRoute.Sitemap = news.map((item, index) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/news/${item.article_slug}`,
    lastModified: new Date(item.updatedAt),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      priority: 1,
    },
    ...productEntries,
    ...newEntries,
  ];
}
