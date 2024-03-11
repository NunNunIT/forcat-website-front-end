interface IVariant {
  name: string;
  url: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface IStarRatingProps {
  rating: number;
  className?: string;
}

export interface ILogoProps {
  className?: string,
  white?: boolean
}

export interface IProductProps {
  id: string,
  name: string,
  rating: number,
  price: number,
  price__discount?: number,
}

export interface ISubCategoryProps {
  id: string,
  name: string,
  products: IProductProps[],
}

export interface ICategoryProps {
  id: string,
  name: string,
  iconData?: string,
  url?: string,
  subCategories?: ISubCategoryProps[]
}

export interface IHeaderLinkProps {
  title: string,
  url: string,
  iconData?: string,
  className?: string,
  children?: React.ReactNode,
}

export interface IHeaderMenuProps {
  categories: ICategoryProps[],
  links: IHeaderLinkProps[],
}

export interface IHeaderMenuProductItemProps {
  id: string,
  name: string,
  rating: number,
  price: number,
  price__discount?: number,
  subCategory_id: string,
}

export interface IHeaderMenuSubCategoryItemProps {
  id: string,
  title: string,
  url_img: string,
  products: IProductProps[],
  children?: React.ReactNode,
}

export interface IHeaderMenuCategoryItemProps {
  id: string,
  title: string,
  url?: string,
  iconData?: string,
  children?: React.ReactNode,
}
