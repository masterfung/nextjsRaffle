'use client'

import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import { MoralisProvider } from "react-moralis"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <MoralisProvider initializeOnMount={false}>
          <html lang="en">
            <body className={inter.className}>
              <Header />
              {children}
              </body>
        </html>
        </MoralisProvider>
    )
}
