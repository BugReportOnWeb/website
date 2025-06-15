const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className='pb-8'>
            <div className='border border-[#242F2B] mb-8'></div>
            <div className='flex justify-between items-center text-xs text-[#e1e7ef]/80'>
                <h1>© {currentYear} Dev. All rights reserved.</h1>
                <h1><a className='underline underline-offset-4 decoration-[#e1e7ef]/40 hover:decoration-[#e1e7ef]/80' href='https://github.com/BugReportOnWeb/website' target='_blank'>Source</a> for nerds</h1>
            </div>
        </div>
    )
}

export default Footer;
