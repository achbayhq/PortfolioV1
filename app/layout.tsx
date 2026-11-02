import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://achbayhaqipa.my.id"),
  title: {
    default: "Bayhaqi | Portfolio",
    template: "%s | Bayhaqi Portfolio",
  },
  description: "Personal portfolio of Achmad Bayhaqi Putra Adira. Mobile Developer specializing in Flutter, Kotlin, and Web Development with Laravel and Next.Js.",
  keywords: ["Bayhaqi", "Portfolio", "Software Developer", "Mobile Developer", "Android Developer", "Flutter", "Kotlin", "Frontend", "React", "Next.js"],
  authors: [{ name: "Bayhaqi" }],
  creator: "Bayhaqi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Bayhaqi | Portfolio",
    description: "Personal portfolio of Achmad Bayhaqi Putra Adira. Mobile Developer focused in Flutter, Kotlin, and Web Development with Laravel dan Next.Js.",
    siteName: "Bayhaqi Portfolio",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bayhaqi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayhaqi | Portfolio",
    description: "Personal portfolio of Achmad Bayhaqi Putra Adira. Mobile Developer specializing in Flutter, Kotlin, and Web Development with Laravel dan Next.Js.",
    images: ["/images/hero.jpg"],
    creator: "@Bayhaqi",
  },
  icons: {
    icon: "/images/hero.jpg",
    shortcut: "/images/hero.jpg",
    apple: "/images/hero.jpg",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ZbLhiilDbtLDyIx5eH6Jeoe1jPkXNKId-LhXG1HhLWA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

