"use client";
// import libs
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CldImage } from "next-cloudinary";

// import utils
import { convertDateStrToDDMMYYYY } from "@/utils";
import { BACKEND_URL } from "@/utils/commonConst";
import { convertDateToHourDayMonthYear } from "@/utils";

// import css
import "./page.css";

// fetch data
async function getEachNews(slug) {
  try {
    const res = await fetch(`${BACKEND_URL}/articles/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return notFound();
    return res.json();
  } catch {
    return notFound();
  }
}

// const articleData: IArticleProps = {
//   article_id: "0",
//   article_name: "Gel Dinh Dưỡng Cho Chó Mèo: Tìm Hiểu, Lựa Chọn & Sử Dụng",
//   article_type: "Cách nuôi",
//   article_short_description:
//     "Gel dinh dưỡng cho chó mèo là một sản phẩm quan trọng trong việc bổ sung năng lượng, vitamin và khoáng chất cho thú cưng của bạn. Việc sử dụng …",
//   article_info: {
//     author: "Thú cưng",
//     published_date: "01/04/2023",
//   },
//   article_date: "01/04/2024",
//   article_description: [
//     { type: "h2", content: "1. Top các loại gel dinh dưỡng tốt nhất hiện nay" },
//     { type: "h3", content: "A. Nutriplus Gel Virbac" },
//     {
//       type: "p",
//       content:
//         "Đặc điểm sản phẩm: Nutriplus Gel Virbac là một sản phẩm dinh dưỡng cao cấp chứa nhiều vitamin, khoáng chất và các chất bổ sung khác. Sản phẩm có kết cấu dạng gel, dễ sử dụng.",
//     },
//     {
//       type: "p",
//       content:
//         "Ứng dụng và công dụng: Hỗ trợ tăng cân, phục hồi sức khỏe sau bệnh, bổ sung năng lượng cho chó mèo trong quá trình tập luyện hoặc mang thai.",
//     },
//     {
//       type: "p",
//       content:
//         "Đánh giá: Nutriplus Gel Virbac được đánh giá cao về chất lượng và hiệu quả sử dụng.",
//     },
//     {
//       type: "img",
//       url: "/imgs/news-page/news-page-000001-01.png",
//       alt: "Gel dinh dưỡng cho mèo Nutriplus",
//       caption: "Gel dinh dưỡng cho mèo Nutriplus",
//     },
//     { type: "h3", content: "B. Felovite II" },
//     {
//       type: "p",
//       content:
//         "Đặc điểm sản phẩm: Felovite II là gel dinh dưỡng chứa vitamin, khoáng chất và taurine, đặc biệt phù hợp cho mèo.",
//     },
//     {
//       type: "p",
//       content:
//         "Ứng dụng và công dụng: Giúp bổ sung năng lượng, hỗ trợ hệ tiêu hóa và tăng cường hệ miễn dịch cho mèo.",
//     },
//     {
//       type: "p",
//       content:
//         "Đánh giá: Felovite II được đánh giá là sản phẩm hiệu quả, giá cả hợp lý.",
//     },
//     { type: "h2", content: "Kết luận" },
//     {
//       type: "p",
//       content:
//         "Việc sử dụng gel dinh dưỡng cho chó mèo đóng vai trò quan trọng trong việc cải thiện sức khỏe, phát triển toàn diện của thú cưng. Bạn nên lựa chọn các sản phẩm từ các địa chỉ uy tín và chính hãng để đảm bảo chất lượng. Đồng thời, hãy tham khảo ý kiến của bác sĩ thú y để xác định nhu cầu dinh dưỡng phù hợp và cách sử dụng gel dinh dưỡng đúng cách cho chó mèo của bạn.",
//     },
//     {
//       type: "h3",
//       content:
//         "Khi mua gel dinh dưỡng, bạn có thể tham khảo các tiêu chí sau để đưa ra quyết định",
//     },
//     {
//       type: "p",
//       content:
//         "Cuối cùng, việc chăm sóc sức khỏe và dinh dưỡng cho chó mèo là một quá trình dài hơi, nên hãy kiên nhẫn và chú ý theo dõi sự thay đổi của thú cưng để điều chỉnh chế độ dinh dưỡng khi cần thiết.",
//     },
//     {
//       type: "p",
//       content: "Chúc bạn và thú cưng của mình luôn khỏe mạnh và hạnh phúc!",
//     },
//   ],
// };

const convertJSONToDOM = (props: {
  type: string;
  content?: string;
  alt?: string;
  caption?: string;
  url?: string;
}) => {
  return (
    <>
      {props.type == "h1" && <h1>{props.content}</h1>}
      {props.type == "h2" && <h2>{props.content}</h2>}
      {props.type == "title" && <h1>{props.content}</h1>}
      {props.type == "h3" && <h3>{props.content}</h3>}
      {props.type == "h4" && <h4>{props.content}</h4>}
      {props.type == "h5" && <h5>{props.content}</h5>}
      {props.type == "h6" && <h6>{props.content}</h6>}
      {props.type == "p" && <p>{props.content}</p>}
      {props.type == "span" && <span>{props.content}</span>}
      {props.type == "image" && (
        <figure>
          <div className="img-container">
            <CldImage src={props.url ?? "a"} alt={props?.alt ?? "alt"} fill />
          </div>
          <figcaption>{props?.caption}</figcaption>
        </figure>
      )}
    </>
  );
};

export default async function NewsDetailPage({
  params,
}: {
  params: { eachNews: string };
}) {
  const slug = params.eachNews;
  const res = await getEachNews(slug);
  const article_name = res.data.article_name;
  const article_info = res.data.article_info;
  const article_type = res.data.article_type;
  const article_date = res.data.article_date;
  const article_description = res.data.article_description;

  return (
    <main>
      <article className="news-page__article">
        <div className="new-page__article--info">
          <span className="news-page__type">{article_type}</span>
          <h1 className="news-page__name">{article_name}</h1>
          <address>
            <time className="news-page__date" dateTime={article_date}>
              {article_info.published_date
                ? convertDateToHourDayMonthYear(article_info.published_date)
                : ""}
            </time>
            {" - Viết bởi: "}
            <strong className="news-page__author">{article_info.author}</strong>
          </address>
        </div>
        <div className="news-pages__article--content">
          {article_description?.map((json) => convertJSONToDOM(json))}
        </div>
      </article>
      <aside className="news-page__aside"></aside>
    </main>
  );
}
