import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css"; // Nhập CSS toàn cục

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xổ Số 3 Miền",
  description: "Xem kết quả xổ số 3 miền trực tiếp",
  viewport: "width=device-width, initial-scale=1.0", // 👈 Thêm dòng này
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Bạn có thể thêm link đến font hoặc CSS khác ở đây */}
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
