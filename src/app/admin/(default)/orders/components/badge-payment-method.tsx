// import utils
import {
  convertPaymentMethod,
  convertPaymentToTailwindCSSBackground,
} from "@/utils";


export default function BadgePaymentMethod(props: IBadgePaymentMethodProps) {
  return <span className={`capitalize w-fit font-bold text-xs block p-2 rounded-md ${convertPaymentToTailwindCSSBackground(props.payment)}`}>
    {convertPaymentMethod(props.payment)}
  </span>;
};
