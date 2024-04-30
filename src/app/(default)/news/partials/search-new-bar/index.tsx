"use client";

import { useRouter } from "next/navigation";

export default function SearchNewBar() {
  const router = useRouter();

  const handleNewsSearch = (event) => {
    event.preventDefault();
    const searchNews = event.target.searchNews.value;
    router.push(`/news?searchKey=${searchNews}`);
  }

  return (
    <form
      className="news-page__search-bar__main"
      onSubmit={handleNewsSearch}
    >
      <input
        className="news-page__search-input"
        type="search"
        name="searchNews"
        placeholder="Bạn tìm tin tức..."
      />
      <button className="news-page__search-btn" type="submit">
        <span className="material-icons-outlined">search</span>
      </button>
    </form>
  )
}