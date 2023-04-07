import "./globals.css";
import Script from 'next/script'

export const metadata = {
  title: "Vin Check Online Website that provides vehicle history",
  description:
    "Quickly and easily check the history of any vehicle to ensure it is safe and reliable. We offer fast and accurate reports that are easy to read and understand.",
    keywords:
    "vin lookup	, vin check online, vin number lookup, vin check,free vin check, vin search, vin lookup free,vin number lookup free,vin number check,vin look up, free vin number check,vin number searchm,car vin lookup,vehicle history,vehicle vin lookup,vin search free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-51GY603RL9" 
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-51GY603RL9', {cookie_flags: 'SameSite=None;Secure'});
        `}
      </Script>
      <body>{children}</body>
    </html>
    
  );
}
