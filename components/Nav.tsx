'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiSolidDownArrow } from 'react-icons/bi';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Nav = () => {
    const pathname = usePathname();

    return (
        <div className='absolute top-0 left-0 right-0 px-4 py-5 flex justify-between items-center'>
            <Link className='font-bold uppercase' href='/'>Dev Kaul</Link>

            <DropdownMenu>
                <DropdownMenuTrigger className='group'>
                    <BiSolidDownArrow className='group-data-[state=open]:rotate-180 transition-rotate duration-300 text-xl cursor-pointer sm:hidden' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-black mr-7 mt-2.5 border-[#e1e7ef]/20 scale-110'>
                    <Link href='/' className={pathname == '/' ? 'text-[#e1e7ef]' : 'text-[#e1e7ef]/60'}>
                        <DropdownMenuItem>Home</DropdownMenuItem>
                    </Link>
                    <Link href='/blogs' className={pathname == '/blogs' ? 'text-[#e1e7ef]' : 'text-[#e1e7ef]/60'}>
                        <DropdownMenuItem>Blog</DropdownMenuItem>
                    </Link>
                    <Link href='/contact' className={pathname == '/contact' ? 'text-[#e1e7ef]' : 'text-[#e1e7ef]/60'}>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>

            <ul className='items-center text-sm font-medium hidden sm:flex gap-5'>
                <Link className={`${pathname === '/' ? 'text-[#e1e7ef]' : 'text-[#ededed]/60'} cursor-pointer transition-colors ease-in-out hover:text-[#ededed]/80`} href='/'>Home</Link>
                <Link className={`${pathname === '/blogs' ? 'text-[#e1e7ef]' : 'text-[#ededed]/60'} cursor-pointer transition-colors ease-in-out hover:text-[#ededed]/80`} href='/blogs'>Blogs</Link>
                <Link className={`${pathname === '/contact' ? 'text-[#e1e7ef]' : 'text-[#ededed]/60'} cursor-pointer transition-colors ease-in-out hover:text-[#ededed]/80`} href='/contact'>Contact</Link>
            </ul>
        </div>
    )
}

export default Nav;
