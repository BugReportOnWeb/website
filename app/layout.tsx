import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export const metadata = {
    title: 'Dev Kaul',
    description: 'Personal website of Dev Kaul',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='relative max-w-6xl h-screen mx-auto'>
                    <Nav />
                    {children}
                </div>
            </body>
        </html>
    )
}
