// import components
import { CustomerAccountAside } from './partials';

// import css
import './layout.css';

export default function AccountLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="account-container">
      <CustomerAccountAside />
      {children}
    </div>
  )
}