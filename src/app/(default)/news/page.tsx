// import libs
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// import components
import { ArticleSummary } from "./partials";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import css
import "./page.css";

// fetch data
async function getAllNews() {
  try {
    const res = await fetch(`${BACKEND_URL}/articles`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return notFound();

    return res.json();
  } catch {
    return notFound();
  }
}

export default async function NewsPage() {
  const res = await getAllNews();
  const articlesData: IArticleProps[] = res.data;

  return (
    <main>
      <h1>Tin tức</h1>
      <section className="news__group-article">
        {articlesData.map((articleData: IArticleProps) => (
          <ArticleSummary key={articleData.article_id} {...articleData} />
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
    </main>
  );
}
