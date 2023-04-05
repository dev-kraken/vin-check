import "./globals.css";

export const metadata = {
  title: "Vin Check Online",
  description:
    "Vin Check Online is a website that provides vehicle history reports for cars, trucks, and motorcycles. The reports provide detailed information about the vehicle's past, including its title history, odometer readings, accident history, and more. Vin Check Online also offers a variety of other services such as vehicle valuation and recall checks. With Vin Check Online, you can make sure you're getting the best deal when buying or selling a used vehicle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
