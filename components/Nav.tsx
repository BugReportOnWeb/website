'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className='absolute top-0 left-0 right-0 p-3 flex justify-between items-center'>
            <h1 className='font-bold uppercase'>Dev Kaul</h1>
            <ul className='flex items-center gap-4 text-sm'>
                <Link className={`${pathname === '/' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/'>Home</Link>
                <Link className={`${pathname === '/blog' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/blog'>Blog</Link>
                <Link className={`${pathname === '/project' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/project'>Project</Link>
                <Link className={`${pathname === '/contact' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/contact'>Contact</Link>
            </ul>
        </div>
    )
}

export default Nav;
