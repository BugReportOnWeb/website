import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav';
import Script from 'next/script';

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
                <div className='relative max-w-2xl h-screen mx-auto'>
                    <Nav />
                    {children}
                </div>
            </body>
            <Script data-goatcounter="https://devkaul.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
        </html>
    )
}
