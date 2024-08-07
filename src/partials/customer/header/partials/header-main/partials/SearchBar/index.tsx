// import libs
import {
  useState,
  useEffect,
  useRef,
  FormEvent
} from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// import utils
import { BACKEND_URL } from "@/utils/commonConst";

// import components
import { CustomerHeaderItemUlt } from "@/components";

// import css
import styles from "./search-bar.module.css";

const cx = classNames.bind(styles);

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchKey = searchParams.get("searchKey") ?? "";

  const [showSmartSearch, setShowSmartSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [totalSearchResults, setTotalSearchResults] = useState(0);
  const [inputValue, setInputValue] = useState(searchKey);
  const smartSearchRef = useRef(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    router.push(`/search-result?searchKey=${formData.get("searchKey")}`);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue) {
        fetchSearchResults(inputValue);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      smartSearchRef.current &&
      !smartSearchRef.current.contains(event.target)
    ) {
      setShowSmartSearch(false);
    }
  };

  const fetchSearchResults = async (inputValue: string) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/productList/searchRecommended?searchKey=${inputValue}`
      );

      const data = await response.json();
      if (data.data.searchKey === inputValue) {
        console.log("Trả về cho data", data.data.searchKey);
        setSearchResults(data.data.recommendedProducts);
        setTotalSearchResults(data.data.totalProducts);
        setShowSmartSearch(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    if (!inputValue) {
      setShowSmartSearch(false);
    }
  };

  return (
    <div className={cx("header__search-bar-wrapper")}>
      <form
        className={cx("header__search-bar__main")}
        onSubmit={onSubmit}
      >
        <div className={cx("header__search-bar")}>
          <input
            className={cx("header__search-input")}
            id="header__search-input"
            type="search"
            name="searchKey"
            placeholder={"Bạn tìm gì..."}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={cx("header__search-btn")} type="submit">
            <span className="material-icons-outlined">search</span>
          </button>
        </div>
      </form>
      <div
        ref={smartSearchRef}
        className={cx("header__smart-search-wrapper", {
          "display-block": showSmartSearch,
        })}
        id="header__smart-search-wrapper"
        style={{ display: showSmartSearch ? "block" : "none" }}>
        <div className={cx("header__suggest-results-content")}>
          {showSmartSearch &&
            (searchResults ?? []).map((product) => (
              <CustomerHeaderItemUlt
                key={product.product_id_hashed}
                product={product}
              />
            ))}
        </div>
        {totalSearchResults > 4
          && <div className={cx("header__suggest-results-more")}>
            <Link
              rel="canonical"
              className={cx("header__suggest-results-more-link")}
              href={`/search-result?searchKey=${inputValue}`}
            >
              Xem thêm
              <span className={cx("highlight")}> {totalSearchResults - 4} </span>
              sản phẩm
            </Link>
          </div>}
      </div>
    </div>
  );
}
