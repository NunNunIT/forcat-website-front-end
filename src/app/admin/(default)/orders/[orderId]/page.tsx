"use client";

// import libs
import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR, { Fetcher } from "swr";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

// import components
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "@/components/admin/ui/table";
import {
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/admin/ui/button";
import { Separator } from "@/components/admin/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/admin/ui/dropdown-menu";
import BadgeOrderStatus from "../components/badge-order-status";
import BadgePaymentMethod from "../components/badge-payment-method";

// import utils
import { BACKEND_URL_ADMIN_ORDER } from "@/utils/commonConst";
import {
  convertNumberToMoney,
  convertDateToYearMonthDayHourMinute,
} from "@/utils";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const fetcher: Fetcher<IAdminSingleOrderProps, string> = async (url: string) => {
  const res: Response = await fetch(url, {
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    next: { revalidate: 60 },
  });

  const json: IResponseJSON = await res.json();
  if (!json.success) throw json;

  return json.data as IAdminSingleOrderProps;
}

const updateOrderStatus = async (orderId: string, status: TOrderStatus) => {
  const res: Response = await fetch(`${BACKEND_URL_ADMIN_ORDER}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    body: JSON.stringify({ order_id: orderId, order_status: status }),
  });

  const json: IResponseJSON = await res.json();
  if (!json.success) throw json;

  return json.data as IAdminSingleOrderProps;
}

export default function AdminOrderIDPage({ params }: { params: { orderId: string } }) {
  const [orderStatus, setOrderStatus] = useState<TOrderStatus | null>(null);
  const url: string = `${BACKEND_URL_ADMIN_ORDER}/${params.orderId}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) {
      setOrderStatus(data.order.order_status);
    }
  }, [data?.order?.order_status])

  return (
    <main>
      <div className='mb-2 flex items-center justify-between space-y-2'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>
            Trang chi tiết đơn hàng
          </h1>
          <p className='text-muted-foreground'>
            {/* Here&apos;s a list of your tasks for this month! */}
            Trang chi tiết đơn hàng dành cho admin của
            <Link href="https://www.forcatshop.com"> Forcatshop.com</Link>
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      {isLoading && <div>Loading...</div>}
      {error && <span>Error: {JSON.stringify(error)}</span>}
      {data &&
        <>
          {/* <div>{JSON.stringify(data)}</div> */}
          <div className="grid grid-cols-3 mt-4 gap-4">
            <div className="col-span-2 flex flex-col gap-4">
              <Table className="rounded-md border block">
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableCell colSpan={5}>
                      <h2 className="text-xl font-bold">Chi tiết đơn hàng #{params.orderId}</h2>
                    </TableCell>
                    <TableCell colSpan={2}>
                      <div className="flex gap-2 items-center justify-end">
                        Thanh toán:
                        <BadgePaymentMethod payment={data.order.order_payment} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="font-bold">
                    <TableCell colSpan={3} className="text-center">STT</TableCell>
                    <TableCell className="w-full">Sản phẩm</TableCell>
                    <TableCell className="text-right w-min-fit whitespace-nowrap">Đơn giá</TableCell>
                    <TableCell className="text-center w-min-fit whitespace-nowrap">Số lượng</TableCell>
                    <TableCell className="text-right w-min-fit whitespace-nowrap">Thành tiền</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.order?.order_details?.map((product, index) => (
                    <TableRow key={product.product_id_hashed}>
                      <TableCell colSpan={3} className="text-center">{index + 1}</TableCell>
                      <TableCell className="flex gap-2">
                        <CldImage src={product.product_img.link} alt={product.product_img.alt} width={96} height={96} />
                        <div>
                          <Link
                            href={`/${product.product_slug}/${product.variant_name}?aid=${product.product_id_hashed}`}
                            className="font-bold text-lg text-slate-900 hover:text-slate-700"
                          >
                            {product.product_name}
                          </Link>
                          <p className="text-slate-500">Phân loại: <span>{product.variant_name}</span></p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-mono">{convertNumberToMoney(product.unit_price)}</TableCell>
                      <TableCell className="text-center">{product.quantity}</TableCell>
                      <TableCell className="text-right font-mono">{convertNumberToMoney(product.unit_price * product.quantity)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={5} className="text-right font-bold">Tổng tiền</TableCell>
                    <TableCell />
                    <TableCell className="text-right font-mono font-bold text-lg">{convertNumberToMoney(data.order?.order_total_cost)}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
              <div className="rounded-md border">
                <div className="flex gap-2 p-4 items-center bg-slate-50">
                  <h2 className="text-xl font-bold">Trạng thái đơn hàng</h2>
                  {orderStatus === "delivering"
                    ? <DropdownMenu>
                      <DropdownMenuTrigger>
                        <BadgeOrderStatus order_status={orderStatus} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {["finished", "cancel"].map((status: TOrderStatus) => (
                          <DropdownMenuItem key={status}
                            onClick={() => {
                              setOrderStatus(status);
                              data.order.order_process_info?.push({
                                status,
                                date: new Date().toISOString()
                              })
                              updateOrderStatus(params.orderId, status);
                            }}>
                            <BadgeOrderStatus
                              order_status={status}
                              className="w-full"
                            />
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    : <BadgeOrderStatus order_status={orderStatus} />
                  }
                </div>
                <Separator />
                <div className="p-4">
                  <div className="flex gap-2 flex-col">
                    <h3 className="font-bold mb-1 text-black">Quá trình đơn hàng</h3>
                    {data.order.order_process_info?.sort((a, b) => {
                      return new Date(b.date).getTime() - new Date(a.date).getTime();
                    }).map((process, index) => (
                      <>
                        <div key={index} className="flex gap-2 items-center">
                          <span className="text-slate-500 font-mono">
                            {convertDateToYearMonthDayHourMinute(process.date)}
                          </span>
                          <BadgeOrderStatus order_status={process.status} />
                        </div>
                      </>
                    ))}
                  </div>
                  <Separator className="mt-2" />
                  <div className="mt-2 text-slate-500">
                    <h3 className="font-bold mb-1 text-black">Ghi chú</h3>
                    <p>{
                      (data.order.order_note
                        && data.order.order_note !== ""
                      ) ? data.order.order_note
                        : "Khách hàng không có để lại lưu ý về đơn hàng"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-md border">
                <div className="p-4 bg-slate-50">
                  <h2 className="text-xl font-bold">Thông tin khách hàng</h2>
                </div>
                <Separator />
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      className="rounded-full"
                      src={data.customer.user_avt_img}
                      alt="Avatar for customer"
                      height={48}
                      width={48}
                    />
                    <span>{data.customer.user_name}</span>
                  </div>
                  <Separator className="mt-2" />
                  <div className="mt-2 text-slate-500">
                    <h3 className="font-bold mb-1 text-black">Thông tin liên hệ</h3>
                    <div className="flex gap-1 items-center">
                      <MailIcon className="w-4 h-4" />
                      <Link
                        className={buttonVariants({ variant: "link", size: "sm" })}
                        href={`mailto:${data.customer.user_email}`}
                      >
                        {data.customer.user_email}
                      </Link>
                    </div>
                    <div className="flex gap-1 items-center">
                      <PhoneIcon className="w-4 h-4" />
                      {(data.customer.user_phone && data.customer.user_phone.length !== 0)
                        ? <Link
                          className={buttonVariants({ variant: "link", size: "sm" })}
                          href={`tel:${data.customer.user_phone}`}
                        >
                          {data.customer.user_phone}
                        </Link>
                        : <span className="px-3 text-sm text-black">Khách hàng chưa cập nhật số điện thoại</span>
                      }
                    </div>
                  </div>
                  <Separator className="mt-2" />
                  <div className="mt-2 text-slate-500">
                    <h3 className="font-bold mb-1 text-black">Địa chỉ nhận hàng</h3>
                    <p>{data.order.order_address.province}</p>
                    <p>{data.order.order_address.district}</p>
                    <p>{data.order.order_address.ward}</p>
                    <p>Đường {data.order.order_address.street}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </main >
  );
};
