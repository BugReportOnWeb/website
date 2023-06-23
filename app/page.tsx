import Image from "next/image";

const Home = () => {
    return (
        <div className='flex flex-col mx-3 mt-64 max-w-[40rem] pb-7 justify-center items-center gap-5 sm:flex-row-reverse sm:items-start sm:mt-0 sm:pb-0'>
            <Image height={170} width={170} className='rounded-full' src='/profile.jpg' alt="Author's Photo" />
            <div className='sm:w-3/4'>
                <p className='leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc mi, imperdiet in lacinia sed, mollis sed ipsum. Phasellus vehicula augue nec dapibus interdum. Ut diam metus, pharetra id vehicula id, consectetur vel velit. Aliquam a dolor ut tortor consectetur luctus sit amet non nulla. Morbi volutpat ornare ante ut ultrices. Nunc id dolor sollicitudin, placerat lectus et, dictum sapien. Sed lacus dolor, pulvinar vitae justo auctor, blandit gravida lacus.</p>
                <div className='mt-7 text-xs flex flex-col justify-around gap-3 sm:flex-row'>
                    <a className='border border-white w-full h-10 rounded-md flex justify-center items-center cursor-pointer font-semibold hover:bg-white hover:text-black' href='https://github.com/BugReportOnWeb' target='_blank'>GitHub</a>
                    <a className='border border-white w-full h-10 rounded-md flex justify-center items-center cursor-pointer font-semibold hover:bg-white hover:text-black' href='https://twitter.com/devkaul0' target='_blank'>Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
