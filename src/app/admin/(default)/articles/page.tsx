"use client";

// import libs
import useSWR, { Fetcher } from "swr";

// import components
import { DataTable } from './components/data-table'
import { columns } from './components/columns'

// import utils
import { BACKEND_URL_ADMIN_ARTICLE } from "@/utils/commonConst";

const fetcher: Fetcher<IDataResponseAdminArticle> = async (url: string) => {
  const res: Response = await fetch(url, {
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    next: { revalidate: 60 },
  });

  const json: IResponseJSON = await res.json();
  if (!json.success) throw json;

  return json.data as IDataResponseAdminArticle;
}

export default function AdminArticlesPage() {
  const url = BACKEND_URL_ADMIN_ARTICLE;
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) return <main>Loading...</main>;
  if (error) return <main>Error: {JSON.stringify(error)}</main>;

  return (
    <main>
      <div className='mb-2 flex items-center justify-between space-y-2'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>Quản lý bài viết</h1>
          <p className='text-muted-foreground'>
            Trang admin của forcatshop dùng để quản lý bài viết
          </p>
        </div>
      </div>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <DataTable data={data.article} columns={columns} />
      </div>
    </main>
  )
}
