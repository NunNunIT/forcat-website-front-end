// import libs
import Link from "next/link";

// import components
import { Separator } from "@/components/admin/ui/separator";
import { ArticleForm } from "./partials";

// import utils
import { BACKEND_URL_ADMIN_ARTICLE } from "@/utils/commonConst";

export default function AdminArticleDetailPage() {
  const url: string = `${BACKEND_URL_ADMIN_ARTICLE}`;

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
      </div>
      <Separator className="my-4" />
      <ArticleForm />
    </main >
  );
};
