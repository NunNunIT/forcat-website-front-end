// import libs
import { ColumnDef } from '@tanstack/react-table'
import { toast } from 'sonner'

// import components
import { Checkbox } from '@/components/admin/ui/checkbox'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

// import utils
import {
  convertDateToYearMonthDayHourMinute,
} from '@/utils'

export const columns: ColumnDef<IAdminArticleProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
          || (table.getIsSomePageRowsSelected() && "indeterminate")
          || false
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   id: "ID",
  //   accessorKey: "article_id_hashed",
  //   header: "ID",
  //   cell: ({ row }) => (
  //     <div
  //       className="text-xs font-medium font-mono hover:cursor-pointer"
  //       onClick={() => {
  //         toast.success("Order ID copied to clipboard!!!");
  //         return navigator.clipboard.writeText(row.original.article_id_hashed);
  //       }}
  //     >
  //       {row.original.article_id_hashed}
  //     </div>
  //   )
  // },
  {
    id: "Date",
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Published Date" />
    ),
    cell: ({ row }) => (
      <div className="text-xs font-mono">
        {convertDateToYearMonthDayHourMinute(row.original.createdAt)}
      </div>
    )
  },
  {
    id: "Author",
    accessorKey: "article_author",
    header: "Author",
    cell: ({ row }) => (
      <div className="text-xs">{row.original.article_author}</div>
    ),
  },
  {
    id: "Title",
    accessorKey: "article_name",
    header: "Article Name",
    cell: ({ row }) => (
      <div className="text-xs w-full block">
        {row.original.article_name}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "Type",
    accessorKey: "article_type",
    header: "Type",
    cell: ({ row }) => (
      <div className="text-xs">
        {row.original.article_type}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DataTableRowActions row={row} />
      )
    },
  },
]
