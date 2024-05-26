// import utils
import {
  convertOrderStatusToStr,
  convertOrderStatusToTailwindCSSBackground,
  convertOrderStatusToTailwindCSSForeground
} from "@/utils";

export default function BadgeOrderStatus(props: IAdminBadgeOrderStatusProps) {
  return <span className={`capitalize w-fit font-bold text-xs block p-2 select-none rounded-md ${convertOrderStatusToTailwindCSSBackground(props.order_status)} ${props.className ?? ""}`}>
    <span className={`size-2 inline-block rounded-full me-1.5 ${convertOrderStatusToTailwindCSSForeground(props.order_status)}`} />
    {convertOrderStatusToStr(props.order_status)}
  </span>
};
