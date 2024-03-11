export interface ProductProps {
  id: string,
  name: string,
  rating: number,
  price: number,
  price__discount?: number,
}

export interface SubCategoryProps {
  id: string,
  name: string,
  products: ProductProps[],
}

export interface CategoryProps {
  id: string,
  name: string,
  iconData?: string,
  url?: string,
  subCategories?: SubCategoryProps[]
}

export interface HeaderLinkProps {
  title: string,
  url: string,
  iconData?: string,
  className?: string,
  children?: React.ReactNode,
}

export interface HeaderMenuProps {
  categories: CategoryProps[],
  links: HeaderLinkProps[],
}

export interface HeaderMenuProductItemProps {
  id: string,
  name: string,
  rating: number,
  price: number,
  price__discount?: number,
  subCategory_id: string,
}

export interface HeaderMenuSubCategoryItemProps {
  id: string,
  title: string,
  url_img: string,
  products: ProductProps[],
  children?: React.ReactNode,
}

export interface HeaderMenuCategoryItemProps {
  id: string,
  title: string,
  url?: string,
  iconData?: string,
  children?: React.ReactNode,
}
