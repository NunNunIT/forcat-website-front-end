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
  convertNumberToMoney,
  convertOrderStatusToStr,
  convertOrderStatusToTailwindCSSBackground,
  convertOrderStatusToTailwindCSSForeground,
  convertPaymentMethod,
  convertPaymentToTailwindCSSBackground,
} from '@/utils'

export const columns: ColumnDef<IAdminOrderProps>[] = [
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
  {
    id: "ID",
    accessorKey: "order_id",
    header: "ID",
    cell: ({ row }) => (
      <div
        className="text-xs font-medium font-mono hover:cursor-pointer"
        onClick={() => {
          toast.success("Order ID copied to clipboard!!!");
          return navigator.clipboard.writeText(row.original.order_id);
        }}
      >
        {row.original.order_id}
      </div>
    )
  },
  {
    id: "Date",
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => (
      <div className="text-xs font-mono">
        {convertDateToYearMonthDayHourMinute(row.original.createdAt)}
      </div>
    )
  },
  {
    id: "Buyer Name",
    accessorKey: "order_buyer_name",
    header: "Buyer Name",
    cell: ({ row }) => (
      <div className="capitalize text-xs">{row.original.order_buyer_name}</div>
    ),
  },
  {
    accessorKey: "Location",
    header: "Buyer Location",
    cell: ({ row }) => (
      <div className="capitalize text-xs">
        {row.original?.order_address?.province}
      </div>
    ),
  },
  {
    id: "payment",
    accessorKey: "order_payment",
    header: "Payment",
    cell: ({ row }) => (
      <span className={`capitalize text-xs p-2 font-bold min-w-fit rounded-md ${convertPaymentToTailwindCSSBackground(row.original.order_payment)}`}>
        {convertPaymentMethod(row.original.order_payment)}
      </span>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "status",
    accessorKey: "order_status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className={`capitalize w-fit font-bold text-xs block p-2 rounded-md ${convertOrderStatusToTailwindCSSBackground(row.original.order_status)}`}>
        <span className={`size-2 inline-block rounded-full me-1.5 ${convertOrderStatusToTailwindCSSForeground(row.original.order_status)}`} />
        {convertOrderStatusToStr(row.original.order_status)}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "total cost",
    accessorKey: "order_total_cost",
    header: () => <div className="text-right">Total Cost</div>,
    cell: ({ row }) => {
      const totalCost = row.original.order_total_cost;
      return <div className="text-right text-xs font-medium font-mono">
        {convertNumberToMoney(totalCost)}
      </div>
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
