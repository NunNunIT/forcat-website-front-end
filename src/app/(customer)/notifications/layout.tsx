// import css
import "./layout.css";

// import partials, components
import { CustomerNotificationAside } from "./partials";

export default function NotificationLayout({
  children
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <main className="notification-container">
      <CustomerNotificationAside />
      {children}
    </main>
  )
}