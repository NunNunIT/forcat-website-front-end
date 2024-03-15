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
  onValueChange: any; // callback to take value from component
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

interface IRating {
  fontSize: TRating;
  rating: number;
}
