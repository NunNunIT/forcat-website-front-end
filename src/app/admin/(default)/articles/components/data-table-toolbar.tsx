import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/admin/ui/button'
import { Input } from '@/components/admin/ui/input'
import { DataTableViewOptions } from '../components/data-table-view-options'

import { types } from '../data/data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'

import ButtonAddArticle from './button-add-article';

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        {table.getColumn('Title') && <Input
          placeholder='Tìm kiếm tên bài viết'
          value={(table.getColumn('Title').getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('Title').setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />}
        <div className='flex gap-x-2'>
          {table.getColumn('Type') && (
            <DataTableFacetedFilter
              column={table.getColumn('Type')}
              title='Type'
              options={types}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <div className='flex gap-2 items-center'>
        <ButtonAddArticle />
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}
