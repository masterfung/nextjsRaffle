import LotteryEntrance from "@/components/LotteryEntrance"
import Head from "next/head"

export const metadata = {
    title: "Smart Contract Raffle",
    description: "Smart Contract Raffle",
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <LotteryEntrance />
        </main>
    )
}
