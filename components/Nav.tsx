'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';

const Nav = () => {
    const pathname = usePathname();

    return (
        <div className='absolute top-0 left-0 right-0 p-3 mt-1 flex justify-between items-center'>
            <Link className='font-bold uppercase' href='/'>Dev Kaul</Link> <RxHamburgerMenu className='text-2xl cursor-pointer sm:hidden' onClick={() => console.log('click')} />
            <ul className='items-center text-sm hidden sm:flex gap-5'>
                <Link className={`${pathname === '/' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/'>Home</Link>
                <Link className={`${pathname === '/blog' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/blog'>Blog</Link>
                <Link className={`${pathname === '/project' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/project'>Project</Link>
                <Link className={`${pathname === '/contact' ? 'text-white' : 'text-gray-500'} cursor-pointer hover:text-white`} href='/contact'>Contact</Link>
            </ul>
        </div>
    )
}

export default Nav;