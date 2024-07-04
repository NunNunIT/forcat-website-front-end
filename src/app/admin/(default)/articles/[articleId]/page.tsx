"use client";

// import libs
import Link from "next/link";
import useSWR, { Fetcher } from "swr";

// import components
import { Separator } from "@/components/admin/ui/separator";
import { ArticleForm } from "./partials";

// import utils
import { BACKEND_URL_ADMIN_ARTICLE } from "@/utils/commonConst";
import { Button, buttonVariants } from "@/components/admin/ui/button";
import { Loader2 } from "lucide-react";

const fetcher: Fetcher<IAdminArticleProps, string> = async (url: string) => {
  const res: Response = await fetch(url, {
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    next: { revalidate: 60 },
  });

  const json: IResponseJSON = await res.json();
  if (!json.success) throw json;

  return json.data as IAdminArticleProps;
}

export default function AdminArticleDetailPage({ params }: { params: { articleId: string } }) {
  const url: string = `${BACKEND_URL_ADMIN_ARTICLE}/${params.articleId}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  return (
    <main>
      <div className='mb-2 flex items-center justify-between space-y-2'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>
            Trang chi tiết bài viết
          </h1>
          <p className='text-muted-foreground'>
            {/* Here&apos;s a list of your tasks for this month! */}
            Trang chi tiết bài viết dành cho admin của
            <Link href="https://www.forcatshop.com"> Forcatshop.com</Link>
          </p>
        </div>
        <div className="flex justify-end">
          {isLoading
            ? <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Chuyển đến trang bài viết
            </Button>
            : error
              ? <></>
              : <Link
                className={buttonVariants({ variant: "default" })}
                href={`/news/${data.article_slug}?aid=${data.article_id_hashed}`}
                target="_blank" rel="noopener noreferrer"
              >
                Chuyển đến trang bài viết
              </Link>
          }
        </div>
      </div>
      <Separator className="my-4" />
      {isLoading
        ? <div>Loading...</div>
        : error ?
          <span>Error: {JSON.stringify(error)}</span>
          : <>
            {/* <div>{JSON.stringify(data)}</div> */}
            <ArticleForm article_id_hashed={params.articleId} {...data} />
          </>
      }
    </main >
  );
};
