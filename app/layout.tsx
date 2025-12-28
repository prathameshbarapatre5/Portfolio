import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-mont" })

export const metadata: Metadata = {
    title: 'Prathmesh Barapatre | Robotics Engineer',
    description: 'Portfolio of Prathmesh Barapatre, Robotics Engineer and Space enthusiast.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-light dark:bg-dark w-full min-h-screen`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
