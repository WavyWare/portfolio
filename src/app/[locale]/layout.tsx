import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/elements/Navbar";
import React from "react";
import Image from "next/image";
import Footer from "@/components/elements/Footer";
import {NextIntlClientProvider} from "next-intl";
import {Locale, routing} from "@/i18n/routing";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan Florek",
  description: "Portfolio",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: LayoutProps<'/[locale]'>) {
    const { locale } = await props.params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages({locale});
    console.log(locale)

    return (
    <html
      lang={locale}
      className={cn("h-full", "antialiased", interSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className={"flex flex-col min-h-screen bg-background"} suppressHydrationWarning>
          <NextIntlClientProvider messages={messages}>
              <div className="fixed inset-0 -z-10 bg-background/80">
                  <Image src="/grid.png" alt="tło strony" fill className="object-cover opacity-40" priority/>
                </div>
                <div className="w-full flex-grow flex flex-col items-center">
                  <Navbar />
                  <main className="w-full max-w-5xl px-4 md:px-8 py-8 flex-grow flex flex-col items-center">
                      {props.children}
                  </main>
                </div>
            <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
