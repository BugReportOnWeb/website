const Footer = ({ component }: { component?: string }) => {

    return (
        <div className={`absolute w-full ${component === 'contact' ? '-bottom-0' : '-bottom-20'} left-0 text-sm px-5 pb-6 flex flex-col gap-1 items-center sm:flex-row sm:justify-between sm:items-end sm:gap-0 sm:bottom-0`}>
            <h1 className='text-[#e1e7ef]/80 text-xs'>© 2023 Dev. All rights reserved.</h1>
            <h1 className='text-[#e1e7ef]/80 text-xs'><a className='underline underline-offset-4 decoration-[#e1e7ef]/40 hover:decoration-[#e1e7ef]/80' href='https://github.com/BugReportOnWeb/website' target='_blank'>Source</a> for nerds</h1>
        </div>
    )
}

export default Footer;
