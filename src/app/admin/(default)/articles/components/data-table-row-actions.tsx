"use client";

// import libs
import Link from 'next/link'

// import components
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

import { buttonVariants, Button } from '@/components/admin/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/admin/ui/dropdown-menu'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const article = row.original as IAdminArticleProps;

  return (
    <div className="flex items-center gap-2">
      <Link
        className={buttonVariants({ variant: "outline" })}
        href={`/admin/articles/${article.article_id_hashed}`}
      >
        Chỉnh sửa bài viết
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <div className="sr-only">Open menu</div>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={`/news/${article.article_slug}?aid=${article.article_id_hashed}`}>
              Xem chi tiết bài viết
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
