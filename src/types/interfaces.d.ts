interface IVariant {
  name: string;
  url: string;
  image: {
    url: string;
    alt: string;
  };
}

interface IQuantityInputGroup {
  defaultValue: number;
  minValue: number;
  maxValue: number;
}

interface IStarRatingProps {
  rating: number;
  className?: string;
}

interface ILogoProps {
  className?: string;
  white?: boolean;
}

interface IProductProps {
  id: string;
  name: string;
  rating: number;
  price: number;
  price__discount?: number;
}

interface ISubCategoryProps {
  id: string;
  name: string;
  products: IProductProps[];
}

interface ICategoryProps {
  id: string;
  name: string;
  iconData?: string;
  url?: string;
  subCategories?: ISubCategoryProps[];
}

interface IHeaderLinkProps {
  title: string;
  url: string;
  iconData?: string;
  className?: string;
  children?: React.ReactNode;
}

interface IHeaderMenuProps {
  categories: ICategoryProps[];
  links: IHeaderLinkProps[];
}

interface IHeaderMenuProductItemProps {
  id: string;
  name: string;
  rating: number;
  price: number;
  price__discount?: number;
  subCategory_id: string;
}

interface IHeaderMenuSubCategoryItemProps {
  id: string;
  title: string;
  products: IProductProps[];
  children?: React.ReactNode;
}

interface IHeaderMenuCategoryItemProps {
  id: string;
  title: string;
  url?: string;
  iconData?: string;
  children?: React.ReactNode;
}

interface ICategoryCardProps {
  name: string;
  url: string;
  description?: string;
}

interface ISliderCardProps {
  url: string;
  description: string;
}

interface IRating {
  fontSize: TRating;
  rating: number;
}

interface IArticleDescriptionContentPRops {
  type: string;
  content: string;
}

interface IArticleDescriptionMediaPRops {
  type: string;
  url: string;
  alt: string;
  caption: string;
}

interface IArticleProps {
  article_id: string;
  article_name: string;
  article_type: string;
  article_short_description: string;
  article_description?: (
    | IArticleDescriptionContentPRops
    | IArticleDescriptionMediaPRops
  )[];
  article_info: {
    author: string;
    published_date: string;
  };
  article_date: string;
  article_slug?: string[];
}
