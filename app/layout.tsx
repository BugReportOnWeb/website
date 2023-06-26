import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Kaul',
  description: 'Personal website of Dev Kaul',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='relative max-w-5xl h-screen mx-auto'>
            <Nav />
            <div className='h-full pt-20 sm:flex sm:justify-center sm:items-center sm:mt-0'>
                {children}
            </div>
        </div>
      </body>
    </html>
  )
}
