import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Sidhanth Pandey",
  description: "Hi, I'm Sidhanth Pandey. I'm a software engineer, writer, and creator. I'm passionate about building products that make a difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TC7ZXCL25X`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TC7ZXCL25X');
          `}
        </Script>
      </head>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
