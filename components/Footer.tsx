import Link from 'next/link'
import React from 'react'
import Layout from './Layout' // wrapper for padding

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <div className='py-8 flex items-center justify-between px-32 lg:px-16 md:px-12 sm:px-8'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                    Built with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;
                    <Link href="/" className='underline underline-offset-2'>Prathmesh</Link>
                </div>
                <Link href="https://www.linkedin.com/in/prathmesh-barapatre/" target={'_blank'} className='underline underline-offset-2'>Say Hello</Link>
            </div>
        </footer>
    )
}

export default Footer
