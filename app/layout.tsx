import './globals.css'
import { Rubik } from 'next/font/google'
import Nav from '@/components/Nav';

const rubik = Rubik({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

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
      <body className={rubik.className}>
        <div className='relative max-w-5xl h-screen mx-auto'>
            <Nav />
            {children}
        </div>
      </body>
    </html>
  )
}
