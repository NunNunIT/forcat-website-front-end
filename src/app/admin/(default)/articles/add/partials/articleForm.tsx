"use client";

// import libs
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { z } from "zod";

// import components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/admin/ui/form"
import { Input } from "@/components/admin/ui/input"
import { Button } from "@/components/admin/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/admin/ui/popover";
import { Calendar } from "@/components/admin/ui/calendar"
import { CalendarIcon, Loader2 } from "lucide-react";

// import lib
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Textarea } from "@/components/admin/ui/textarea";

// import utils
import { BACKEND_URL_ADMIN_ARTICLE } from "@/utils/commonConst";

const formSchema = z.object({
  article_name: z.string().min(1, {
    message: "Tên bài viết không được để trống"
  }),
  article_avt_link: z.string().min(1, {
    message: "Thiếu hình ảnh đại diện cho bài viết",
  }),
  article_avt_alt: z.string().min(1, {
    message: "Thiếu văn bản thay thế cho hình ảnh đại diện bài viết"
  }),
  article_type: z.string().min(1, {
    message: "Loại bài viết không được để trống"
  }),
  article_short_description: z.string().min(1, {
    message: "Mô tả ngắn không được để trống (được sử dụng để trong thẻ <meta description>)"
  }),
  article_author: z.string().min(1, {
    message: "Tác giả không được để trống"
  }),
  // max là ngày mai
  // nếu max là ngày hiện tại thì sẽ bị lỗi
  article_date_published: z.date().max(new Date(new Date().getTime() + 24 * 60 * 60 * 1000), {
    message: "Ngày xuất bản không được sớm hơn ngày hiện tại"
  }),
  article_subtitle: z.string().min(1, {
    message: "Tiêu đề phụ không được để trống"
  }),
  article_content: z.string().min(1, {
    message: "Nội dung không được để trống"
  }),
});

export default function ArticleForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      article_name: "",
      article_type: "",
      article_author: "",
      article_short_description: "",
      article_date_published: new Date(),
      article_subtitle: "",
      article_content: "",
      article_avt_link: "",
      article_avt_alt: "",
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const {
      article_avt_link, article_avt_alt,
      article_author, article_date_published,
      ...rest
    } = values;
    const article_avt: { link: string, alt: string } = {
      link: article_avt_link,
      alt: article_avt_alt,
    }
    const article_info: { author: string, published_date: string } = {
      author: article_author,
      published_date: format(article_date_published, "yyyy-MM-dd"),
    }
    const json = JSON.stringify({ ...rest, article_avt, article_info });
    const res = await fetch(BACKEND_URL_ADMIN_ARTICLE, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      credentials: "include",
      body: json,
    });

    setIsLoading(false);
    if (res.status !== 200) {
      return toast.error(`Có lỗi xảy ra khi cập nhật bài viết ${res.statusText}`);
    }

    form.reset();
    return toast.success(`Bài viết "${values.article_name.length > 60
      ? values.article_name.slice(0, 57) + "..."
      : values.article_name
      }" đã được tạo mới thành công`
    );
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4 h-fit">
        <div className="col-span-1 space-y-4">
          {/* Article Author */}
          <FormField
            control={form.control}
            name="article_author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-bold">Tác giả</FormLabel>
                <FormControl><Input disabled={isLoading} placeholder="Nhập tác giả" {...field} /></FormControl>
                <FormMessage />
                <FormDescription>Tên tác giả được sử dụng để hiển thị trên trang web.</FormDescription>
              </FormItem>
            )}
          />
          {/* Article Name */}
          <FormField
            control={form.control}
            name="article_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-bold">Tên bài viết</FormLabel>
                <FormControl><Input disabled={isLoading} placeholder="Nhập tên bài viết" {...field} /></FormControl>
                <FormMessage />
                <FormDescription>Tên bài viết được sử dụng để hiển thị trên trang web.</FormDescription>
              </FormItem>
            )}
          />
          {/* Article Type */}
          <FormField
            control={form.control}
            name="article_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-bold">Loại bài viết</FormLabel>
                <FormControl><Input disabled={isLoading} placeholder="Nhập loại bài viết" {...field} /></FormControl>
                <FormMessage />
                <FormDescription>Loại bài viết được sử dụng để phân loại bài viết.</FormDescription>
              </FormItem>
            )}
          />
          {/* Article Short Description */}
          <FormField
            control={form.control}
            name="article_short_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-bold">Mô tả ngắn</FormLabel>
                <FormControl><Input disabled={isLoading} placeholder="Nhập mô tả ngắn" {...field} /></FormControl>
                <FormMessage />
                <FormDescription>Mô tả ngắn được sử dụng trong thẻ meta description của trang.</FormDescription>
              </FormItem>
            )}
          />
          {/* Article Published Date */}
          <FormField
            control={form.control}
            name="article_date_published"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-bold">Ngày xuất bản</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] px-3 text-left font-normal capitalize",
                          // "w-fit pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          <>
                            {/* {JSON.stringify(field)} */}
                            {format(field.value, "PPP", { locale: vi })}
                          </>
                        ) : (
                          <span>Chọn ngày</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
                <FormDescription>Ngày xuất bản của bài viết.</FormDescription>
              </FormItem>
            )}
          />


          {/* Article Avt Link */}
          <FormField
            control={form.control}
            name="article_avt_link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Hình ảnh đại diện</FormLabel>
                {field.value
                  ? <div className="relative w-full aspect-video">
                    <Image src={field.value} alt="Lmao" fill />
                  </div>
                  : <></>}
                <FormControl>
                  <Input disabled={isLoading} placeholder="Nhập đường dẫn hình ảnh đại diện" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>Hình ảnh đại diện của bài viết. Đường dẫn hình ảnh phải là một URL hợp lệ.</FormDescription>
              </FormItem>

            )}
          />

          {/* Article Avt Alt*/}
          <FormField
            control={form.control}
            name="article_avt_alt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Văn bản thay thế cho hình ảnh đại diện bài viết</FormLabel>
                <FormControl><Input disabled={isLoading} type="text" {...field} /></FormControl>
                <FormMessage />
                <FormDescription>Văn bản này được sử dụng khi hình ảnh bị hỏng.</FormDescription>
              </FormItem>
            )}
          />

        </div>
        <div className="col-span-2 flex flex-col gap-4">
          {/* Article Subtitle */}
          <FormField
            control={form.control}
            name="article_subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-bold">Tiêu đề phụ</FormLabel>
                <FormControl><Input disabled={isLoading} placeholder="Nhập tiêu đề phụ" {...field} /></FormControl>
                <FormMessage />
                <FormDescription>Tiêu đề phụ được sử dụng để mô tả bài viết.</FormDescription>
              </FormItem>
            )}
          />

          {/* Article Content */}
          <FormField
            control={form.control}
            name="article_content"
            render={({ field }) => (
              <FormItem className="h-full flex flex-col">
                <FormLabel className="text-bold leading-6">Nội dung</FormLabel>
                <div className="h-full flex flex-col gap-2">
                  <FormControl>
                    <Textarea
                      className="h-full resize-none p-2 border border-gray-200 rounded-md scrollbar"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Nội dung bài viết được viết dưới dạng markdown.</FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button
          className="col-span-3"
          disabled={isLoading}
          type="submit"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Tạo bài viết mới
        </Button>
      </form>
    </Form>
  )
}
