import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'

const inter = Inter({ 
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'Prathmesh Barapatre | Robotics Engineer',
    description: 'Robotics Engineer specializing in space exploration, autonomous systems, and cutting-edge technology.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-dark text-light min-h-screen relative`}>
                <BackgroundEffects />
                <Navbar />
                <main className="relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
