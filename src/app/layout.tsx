"use client"

import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MoralisProvider initializeOnMount={false}>
                    <NotificationProvider>
                        <Header />
                        {children}
                    </NotificationProvider>
                </MoralisProvider>
            </body>
        </html>
    )
}
