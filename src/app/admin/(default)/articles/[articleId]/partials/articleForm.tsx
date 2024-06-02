"use client";

// import libs
import { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { z } from "zod";
import axios from "axios";

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


const IMAGE_TYPE_ACCEPTED = ["image/webp"]

const formSchema = z.object({
  article_name: z.string().min(1, {
    message: "Tên bài viết không được để trống"
  }),
  article_avt_link: z.string(),
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
  article_avt_blob:
    typeof window !== "undefined" && typeof window.FileList !== "undefined"
      ? z.optional(
        z.instanceof(
          window.FileList
        ).refine(
          (file) => file.length === 0 || IMAGE_TYPE_ACCEPTED.includes(file.item(0)?.type),
          { message: "File không hợp lệ. Vui lòng chọn file hình ảnh có định dạng webp." }
        ))
      : z.optional(z.any()),
});

export default function ArticleForm(props: IAdminArticleProps) {
  const [previewImgURL, setPreviewImgURL] = useState<string | null>(props.article_avt?.link);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      article_name: props.article_name,
      article_type: props.article_type,
      article_author: props.article_author,
      article_short_description: props.article_short_description,
      article_date_published: new Date(props.article_date_published),
      article_subtitle: props.article_subtitle,
      article_content: props.article_content,
      article_avt_link: props.article_avt.link,
      article_avt_alt: props.article_avt.alt,
    }
  })

  useEffect(() => {
    const previewImgURL: string =
      form.watch("article_avt_blob")?.length > 0
        ? URL.createObjectURL(form.watch("article_avt_blob")[0])
        : props.article_avt?.link;
    console.log(previewImgURL);
    setPreviewImgURL(previewImgURL);

    return () => {
      if (previewImgURL) URL.revokeObjectURL(previewImgURL);
    }
  }, [form.watch("article_avt_blob")]);

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    const {
      article_avt_link, article_avt_alt,
      article_author, article_date_published,
      article_avt_blob,
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

    const formData = new FormData();
    formData.append("article_avt_blob", article_avt_blob[0]);
    formData.append("article_avt", JSON.stringify(article_avt));
    formData.append("article_info", JSON.stringify(article_info));
    for (let key in rest) {
      formData.append(key, rest[key])
    }

    try {
      setIsLoading(true);
      await axios.post(
        BACKEND_URL_ADMIN_ARTICLE + "/" + props.article_id_hashed,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data", },
          withCredentials: true,
        }
      )

      setIsLoading(false);

      return toast.success(`Bài viết "${values.article_name.length > 60
        ? values.article_name.slice(0, 57) + "..."
        : values.article_name
        }" đã được cập nhật thành công`
      );
    } catch (err) {
      setIsLoading(false);
      return toast.error(`Có lỗi xảy ra khi cập nhật bài viết ${err.message}`);
    }
  }, []);

  const fileRef = form.register("article_avt_blob");

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
                <FormDescription>
                  Ngày xuất bản của bài viết.
                  <FormMessage />
                </FormDescription>
              </FormItem>
            )}
          />

          {/* Article Image */}
          <FormField
            control={form.control}
            name="article_avt_blob"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Hình ảnh đại diện bằng tệp</FormLabel>
                <Image
                  className="w-full aspect-video"
                  src={previewImgURL}
                  alt="Hình xem trước"
                  width={512}
                  height={100}
                />
                <FormControl>
                  <Input
                    type="file"
                    accept="image/webp"
                    disabled={isLoading}
                    onChange={(event) => {
                      field.onChange(event.target?.files?.[0] ?? undefined);
                    }}
                    {...fileRef}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Định dạng hình ảnh phải là webp.</FormDescription>
              </FormItem>
            )}
          />

          {/* Article Avt Alt*/}
          <FormField
            control={form.control}
            name="article_avt_alt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="">Văn bản thay thế cho hình ảnh đại diện bài viết</FormLabel>
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
          Cập nhật bài viết
        </Button>
      </form>
    </Form>
  )
}
