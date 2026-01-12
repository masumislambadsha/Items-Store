import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ItemStore - Premium Item Management",
  description:
    "Discover and manage amazing items with our modern web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
