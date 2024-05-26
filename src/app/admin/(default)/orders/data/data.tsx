// import {
//   ArrowDownIcon,
//   ArrowRightIcon,
//   ArrowUpIcon,
//   CheckCircledIcon,
//   CircleIcon,
//   CrossCircledIcon,
//   QuestionMarkCircledIcon,
//   StopwatchIcon,
// } from "@radix-ui/react-icons"

// export const labels = [
//   {
//     value: "bug",
//     label: "Bug",
//   },
//   {
//     value: "feature",
//     label: "Feature",
//   },
//   {
//     value: "documentation",
//     label: "Documentation",
//   },
// ]

// export const statuses = [
//   {
//     value: "backlog",
//     label: "Backlog",
//     icon: QuestionMarkCircledIcon,
//   },
//   {
//     value: "todo",
//     label: "Todo",
//     icon: CircleIcon,
//   },
//   {
//     value: "in progress",
//     label: "In Progress",
//     icon: StopwatchIcon,
//   },
//   {
//     value: "done",
//     label: "Done",
//     icon: CheckCircledIcon,
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//     icon: CrossCircledIcon,
//   },
// ]

export const statuses = [
  {
    value: "unpaid",
    label: "Chờ thanh toán",
  },
  {
    value: "delivering",
    label: "Đang giao",
  },
  {
    value: "finished",
    label: "Hoàn thành",
  },
  {
    value: "cancel",
    label: "Đã hủy",
  },
]

// export const priorities = [
//   {
//     label: "Low",
//     value: "low",
//     icon: ArrowDownIcon,
//   },
//   {
//     label: "Medium",
//     value: "medium",
//     icon: ArrowRightIcon,
//   },
//   {
//     label: "High",
//     value: "high",
//     icon: ArrowUpIcon,
//   },
// ]

export const payments = [
  {
    value: "internet_banking",
    label: "Online",
  },
  {
    value: "cod",
    label: "Trực tiếp",
  },
]