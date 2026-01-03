import Link from 'next/link'
import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='w-full border-t border-gray-200 dark:border-gray-800 bg-light dark:bg-dark mt-20'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pb-8'>
                    {/* Brand */}
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <div className='w-10 h-10 bg-gradient-to-br from-primary to-accent text-white rounded-lg flex items-center justify-center font-bold text-lg'>
                                PB
                            </div>
                            <span className='font-bold text-xl'>Prathmesh</span>
                        </div>
                        <p className='text-secondary dark:text-gray-400 text-sm leading-relaxed'>
                            Robotics Engineer passionate about space exploration and cutting-edge technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-lg'>Quick Links</h3>
                        <nav className='flex flex-col space-y-2'>
                            <Link href="/about" className='text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark transition-colors text-sm'>
                                About
                            </Link>
                            <Link href="/projects" className='text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark transition-colors text-sm'>
                                Projects
                            </Link>
                            <Link href="/articles" className='text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primaryDark transition-colors text-sm'>
                                Articles
                            </Link>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-lg'>Connect</h3>
                        <div className='flex gap-4'>
                            <a
                                href="https://github.com/prathameshbarapatre5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white transition-all'
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/prathmesh-barapatre/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white transition-all'
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:barapatre.p@northeastern.edu"
                                className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white transition-all'
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary dark:text-gray-400'>
                    <p>
                        {new Date().getFullYear()} © Prathmesh Barapatre. All rights reserved.
                    </p>
                    <p>
                        Designed & Built with <span className='text-red-500'>♥</span> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
