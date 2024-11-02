import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { MarketingBanner } from "@/components/marketing-banner";
import { FooterBanner } from "@/components/footer-banner";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VetNet AI - Military Transition Assistant",
  description: "AI-powered platform helping veterans transition to civilian life",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Providers>
          <MarketingBanner />
          <Navigation />
          <main>
            {children}
          </main>
          <FooterBanner />
        </Providers>
      </body>
    </html>
  );
}