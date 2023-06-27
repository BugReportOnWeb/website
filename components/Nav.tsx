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
        <div className='absolute top-0 left-0 right-0 p-3 mt-1 flex justify-between items-center'>
            <Link className='font-bold uppercase' href='/'>Dev Kaul</Link>

            <DropdownMenu>
                <DropdownMenuTrigger><BiSolidDownArrow className='text-xl cursor-pointer sm:hidden' onClick={() => console.log('click')} /></DropdownMenuTrigger>
                <DropdownMenuContent className='bg-black text-[#ededed] mr-3 border-slate-600'>
                    <Link href='/' className={pathname == '/' ? 'text-[#ededed]' : 'text-slate-500'}>
                        <DropdownMenuItem>Home</DropdownMenuItem>
                    </Link>
                    <Link href='/blog' className={pathname == '/blog' ? 'text-[#ededed]' : 'text-slate-500'}>
                        <DropdownMenuItem>Blog</DropdownMenuItem>
                    </Link>
                    <Link href='/project' className={pathname == '/project' ? 'text-[#ededed]' : 'text-slate-500'}>
                        <DropdownMenuItem>Project</DropdownMenuItem>
                    </Link>
                    <Link href='/contact' className={pathname == '/contact' ? 'text-[#ededed]' : 'text-slate-500'}>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>

            <ul className='items-center text-sm hidden sm:flex gap-5 '>
                <Link className={`${pathname === '/' ? 'text-[#ededed]' : 'text-gray-500'} cursor-pointer transition-colors ease-in-out hover:text-[#ededed]`} href='/'>Home</Link>
                <Link className={`${pathname === '/blog' ? 'text-[#ededed]' : 'text-gray-500'} cursor-pointer transition-colors ease-in-out hover:text-[#ededed]`} href='/blog'>Blog</Link>
                <Link className={`${pathname === '/project' ? 'text-[#ededed]' : 'text-gray-500'} cursor-pointer transition-colors ease-in-out hover:text-[#ededed]`} href='/project'>Project</Link>
                <Link className={`${pathname === '/contact' ? 'text-[#ededed]' : 'text-gray-500'} cursor-pointer transition-colors ease-in-out hover:text-[#ededed]`} href='/contact'>Contact</Link>
            </ul>
        </div>
    )
}

export default Nav;
