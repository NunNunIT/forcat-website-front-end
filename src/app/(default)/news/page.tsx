// import libs
import Image from "next/image";
import { Fetcher } from "swr";
import { notFound } from "next/navigation";
import type { Metadata } from "next";


// import partials, components
import { CustomerArticleItem } from "./partials";
import { CustomerPagination } from "@/components";

// import utils
import { BACKEND_URL_ARTICLES } from "@/utils/commonConst";

// import css
import "./page.css";

export const metadata: Metadata = {
  title: "Tin tức",
  description:
    "Khám phá tin tức mới nhất về thế giới thú cưng tại ForCat Shop. Chúng tôi cập nhật những thông tin hữu ích về cách chăm sóc, nuôi dưỡng và yêu thương thú cưng của bạn. Duyệt qua bài viết về các sản phẩm mới, những mẹo hữu ích và các sự kiện đặc biệt. ForCat Shop luôn đồng hành cùng bạn trong hành trình chăm sóc và tạo niềm vui cho thú cưng của bạn!",
};

const getFullBackendArticleUrl = (page: string, limit: string): string => {
  return `${BACKEND_URL_ARTICLES}?page=${page}&limit=${limit}`;
}

export const fetcher: Fetcher<IResponseArticles, string> = async (url: string) => {
  const RES: Response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!RES.ok)
    return notFound();

  const json: IResponseJSON = await RES.json();
  return json.data as IResponseArticles;
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const page = searchParams?.page ?? "1";
  const limit = searchParams?.limit ?? "4";
  const fullURL: string = getFullBackendArticleUrl(page, limit);
  const data = await fetcher(fullURL);

  return (
    <main>
      <h1>Tin tức</h1>
      <section className="news__group-article">
        {data.articles.map((articleData: IArticleItemProps) => (
          <CustomerArticleItem key={articleData._id} {...articleData} />
        ))}
      </section>

      <aside className="news__group-banner">
        <div className="news__banner-container">
          <Image
            src="/imgs/banner/banner_1.png"
            alt="The first banner in news-page"
            fill
          />
        </div>
        <div className="news__banner-container">
          <Image
            src="/imgs/banner/banner_2.png"
            alt="The second banner in news-page"
            fill
          />
        </div>
      </aside>
      <CustomerPagination className={"news__pagination"} maxPage={data.maxPage} />

    </main>
  );
}
