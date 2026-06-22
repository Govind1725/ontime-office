import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ontime Office Solutions | Enterprise Office Supplies & Solutions",
    template: "%s | Ontime Office Solutions",
  },
  description:
    "India's trusted enterprise office solutions provider. 15+ years of excellence delivering 1000+ products across 500+ corporate clients nationwide.",
  keywords: [
    "office supplies",
    "enterprise solutions",
    "corporate stationery",
    "office furniture",
    "IT accessories",
    "India office supplies",
  ],
  openGraph: {
    title: "Ontime Office Solutions",
    description:
      "India's trusted enterprise office solutions provider. 15+ years of excellence.",
    url: "https://ontimeofficesolutions.com",
    siteName: "Ontime Office Solutions",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
