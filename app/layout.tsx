import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Nunito_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "TDNM - Giải Pháp Trí Tuệ Nhân Tạo Tiên Tiến Cho Doanh Nghiệp",
  description:
    "TDNM là công ty hàng đầu châu Á chuyên phát triển mô hình AI, ứng dụng AI và sáng tạo nội dung đa phương tiện. Vô địch TensorArt Global FLUX Training Event 2024.",
  generator: "v0.app",
  keywords: "AI, trí tuệ nhân tạo, machine learning, deep learning, FLUX, TensorArt, Vietnam AI",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${nunitoSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
