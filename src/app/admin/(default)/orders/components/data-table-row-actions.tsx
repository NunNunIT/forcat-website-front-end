// import libs
import Link from 'next/link'
import { toast } from "sonner"

// import components
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

import { buttonVariants, Button } from '@/components/admin/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/admin/ui/dropdown-menu'

// import { labels } from '../data/data'
// import { taskSchema } from '../data/schema'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // const task = taskSchema.parse(row.original)
  const order = row.original as IAdminOrderProps

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant='ghost'
    //       className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
    //     >
    //       <DotsHorizontalIcon className='h-4 w-4' />
    //       <span className='sr-only'>Open menu</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align='end' className='w-[160px]'>
    //     <DropdownMenuItem>Edit</DropdownMenuItem>
    //     <DropdownMenuItem>Make a copy</DropdownMenuItem>
    //     <DropdownMenuItem>Favorite</DropdownMenuItem>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuSub>
    //       <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
    //       <DropdownMenuSubContent>
    //         <DropdownMenuRadioGroup value={task.label}>
    //           {labels.map((label) => (
    //             <DropdownMenuRadioItem key={label.value} value={label.value}>
    //               {label.label}
    //             </DropdownMenuRadioItem>
    //           ))}
    //         </DropdownMenuRadioGroup>
    //       </DropdownMenuSubContent>
    //     </DropdownMenuSub>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>
    //       Delete
    //       <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div className="flex items-center gap-2">
      <Link
        // className="h-min hover:underline me-1"
        className={buttonVariants({ variant: "outline" })}
        href={`/admin/orders/${order.order_id}`}
      >
        Xem chi tiết
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
          <DropdownMenuItem
            onClick={() => {
              toast.success("Order ID copied to clipboard!!!");
              return navigator.clipboard.writeText(order.order_id)
            }}
          >
            Copy Order ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View customer</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
