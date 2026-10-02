import "./globals.css";
import { Cormorant_Infant, Mulish } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const serif = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Santa Monica Therapist for Anxiety, Trauma & Burnout",
    template: "%s | Dr. Maya Reynolds, PsyD",
  },
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering warm, evidence-based therapy for anxiety, trauma & burnout. In-person visits and secure telehealth across California.",
  keywords: [
    "therapist Santa Monica",
    "psychologist Santa Monica CA",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR Santa Monica",
    "burnout therapist",
    "telehealth psychologist California",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds, PsyD",
    title: "Santa Monica Therapist for Anxiety, Trauma & Burnout",
    description:
      "Warm, evidence-based therapy for anxiety, trauma & burnout. In-person in Santa Monica and secure telehealth across California.",
  },
  twitter: {
    card: "summary",
    title: "Santa Monica Therapist for Anxiety, Trauma & Burnout",
    description:
      "Warm, evidence-based therapy for anxiety, trauma & burnout. In-person in Santa Monica and secure telehealth across California.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E5747",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans font-light leading-relaxed text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary-deep focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
