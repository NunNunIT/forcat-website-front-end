// import components
import { Toaster } from "@/components/admin/ui/sonner";

// import styles
import "./layout.css";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <>
    {children}
    <Toaster />
  </>;
};
