"use client";

// import libs
import useSWR, { Fetcher } from "swr";

// import components
import { DataTable } from './components/data-table'
import { columns } from './components/columns'

// import utils
import { BACKEND_URL_ADMIN_ORDER } from "@/utils/commonConst";

// const data = {
//   orders: [
//     { "order_id": "664f687e26670e9f66295393", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:06.511Z" },
//     { "order_id": "664f687c26670e9f6629538b", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:04.067Z" },
//     { "order_id": "6649a89d285f6d6c61881c9f", "order_buyer_name": "Nguyễn Nhật Tấn", "order_buyer_phone": "0396626764", "order_address": { "street": "a", "ward": "Xã Nhạn Môn", "district": "Huyện Pác Nặm", "province": "Tỉnh Bắc Kạn" }, "order_status": "unpaid", "order_payment": "cod", "order_total_cost": 46199, "createdAt": "2024-05-19T07:22:05.949Z" },
//     { "order_id": "66382baa4792df8fd8840655", "order_buyer_name": "Nhung", "order_buyer_phone": "0987296708", "order_address": { "street": "10 1234", "ward": "Xã Phù Lưu", "district": "Huyện Hàm Yên", "province": "Tỉnh Tuyên Quang" }, "order_status": "delivering", "order_payment": "internet_banking", "order_total_cost": 39000, "createdAt": "2024-05-06T01:00:26.071Z" },
//     { "order_id": "66382a1f4792df8fd883f6dc", "order_buyer_name": "Nhung", "order_buyer_phone": "0987654321", "order_address": { "street": "25 1334", "ward": "Xã Hùng Mỹ", "district": "Huyện Chiêm Hóa", "province": "Tỉnh Tuyên Quang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 48000, "createdAt": "2024-05-06T00:53:51.079Z" },
//     { "order_id": "664f687e26670e9f66295393", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:06.511Z" },
//     { "order_id": "664f687c26670e9f6629538b", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:04.067Z" },
//     { "order_id": "6649a89d285f6d6c61881c9f", "order_buyer_name": "Nguyễn Nhật Tấn", "order_buyer_phone": "0396626764", "order_address": { "street": "a", "ward": "Xã Nhạn Môn", "district": "Huyện Pác Nặm", "province": "Tỉnh Bắc Kạn" }, "order_status": "unpaid", "order_payment": "cod", "order_total_cost": 46199, "createdAt": "2024-05-19T07:22:05.949Z" },
//     { "order_id": "66382baa4792df8fd8840655", "order_buyer_name": "Nhung", "order_buyer_phone": "0987296708", "order_address": { "street": "10 1234", "ward": "Xã Phù Lưu", "district": "Huyện Hàm Yên", "province": "Tỉnh Tuyên Quang" }, "order_status": "delivering", "order_payment": "internet_banking", "order_total_cost": 39000, "createdAt": "2024-05-06T01:00:26.071Z" },
//     { "order_id": "66382a1f4792df8fd883f6dc", "order_buyer_name": "Nhung", "order_buyer_phone": "0987654321", "order_address": { "street": "25 1334", "ward": "Xã Hùng Mỹ", "district": "Huyện Chiêm Hóa", "province": "Tỉnh Tuyên Quang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 48000, "createdAt": "2024-05-06T00:53:51.079Z" },
//     { "order_id": "664f687e26670e9f66295393", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:06.511Z" },
//     { "order_id": "664f687c26670e9f6629538b", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:04.067Z" },
//     { "order_id": "6649a89d285f6d6c61881c9f", "order_buyer_name": "Nguyễn Nhật Tấn", "order_buyer_phone": "0396626764", "order_address": { "street": "a", "ward": "Xã Nhạn Môn", "district": "Huyện Pác Nặm", "province": "Tỉnh Bắc Kạn" }, "order_status": "unpaid", "order_payment": "cod", "order_total_cost": 46199, "createdAt": "2024-05-19T07:22:05.949Z" },
//     { "order_id": "66382baa4792df8fd8840655", "order_buyer_name": "Nhung", "order_buyer_phone": "0987296708", "order_address": { "street": "10 1234", "ward": "Xã Phù Lưu", "district": "Huyện Hàm Yên", "province": "Tỉnh Tuyên Quang" }, "order_status": "delivering", "order_payment": "internet_banking", "order_total_cost": 39000, "createdAt": "2024-05-06T01:00:26.071Z" },
//     { "order_id": "66382a1f4792df8fd883f6dc", "order_buyer_name": "Nhung", "order_buyer_phone": "0987654321", "order_address": { "street": "25 1334", "ward": "Xã Hùng Mỹ", "district": "Huyện Chiêm Hóa", "province": "Tỉnh Tuyên Quang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 48000, "createdAt": "2024-05-06T00:53:51.079Z" },
//     { "order_id": "664f687e26670e9f66295393", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:06.511Z" },
//     { "order_id": "664f687c26670e9f6629538b", "order_buyer_name": "fd", "order_buyer_phone": "0919124589", "order_address": { "street": "hcm city", "ward": "Xã Ngọc Vân", "district": "Huyện Tân Yên", "province": "Tỉnh Bắc Giang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 33199, "createdAt": "2024-05-23T16:02:04.067Z" },
//     { "order_id": "6649a89d285f6d6c61881c9f", "order_buyer_name": "Nguyễn Nhật Tấn", "order_buyer_phone": "0396626764", "order_address": { "street": "a", "ward": "Xã Nhạn Môn", "district": "Huyện Pác Nặm", "province": "Tỉnh Bắc Kạn" }, "order_status": "unpaid", "order_payment": "cod", "order_total_cost": 46199, "createdAt": "2024-05-19T07:22:05.949Z" },
//     { "order_id": "66382baa4792df8fd8840655", "order_buyer_name": "Nhung", "order_buyer_phone": "0987296708", "order_address": { "street": "10 1234", "ward": "Xã Phù Lưu", "district": "Huyện Hàm Yên", "province": "Tỉnh Tuyên Quang" }, "order_status": "delivering", "order_payment": "internet_banking", "order_total_cost": 39000, "createdAt": "2024-05-06T01:00:26.071Z" },
//     { "order_id": "66382a1f4792df8fd883f6dc", "order_buyer_name": "Nhung", "order_buyer_phone": "0987654321", "order_address": { "street": "25 1334", "ward": "Xã Hùng Mỹ", "district": "Huyện Chiêm Hóa", "province": "Tỉnh Tuyên Quang" }, "order_status": "unpaid", "order_payment": "internet_banking", "order_total_cost": 48000, "createdAt": "2024-05-06T00:53:51.079Z" },
//   ]
// }

const fetcher: Fetcher<IDataResponseAdminOrder> = async (url: string) => {
  const res: Response = await fetch(url, {
    headers: { "Content-Type": "application/json", },
    credentials: "include",
    next: { revalidate: 60 },
  });

  const json: IResponseJSON = await res.json();
  if (!json.success) throw json;

  return json.data as IDataResponseAdminOrder;
}

export default function Tasks() {
  const url = BACKEND_URL_ADMIN_ORDER;
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) return <main>Loading...</main>;
  if (error) return <main>Error: {JSON.stringify(error)}</main>;

  return (
    <main>
      <div className='mb-2 flex items-center justify-between space-y-2'>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>Quản lý bán hàng</h1>
          <p className='text-muted-foreground'>
            Trang admin của forcatshop dùng để quản lý bán hàng
          </p>
        </div>
      </div>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <DataTable data={data.orders} columns={columns} />
      </div>
    </main>
  )
}
