import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hussan Matloob | Full Stack Flutter Developer",
  description:
    "Professional Flutter Developer specializing in production-ready mobile applications, Laravel APIs, Firebase, Supabase, and scalable business software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}