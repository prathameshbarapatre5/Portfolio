import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='relative z-10 border-t border-white/10 mt-32'>
            <div className='glass backdrop-blur-xl'>
                <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                        <div className='text-secondary text-sm order-2 md:order-1'>
                            © {new Date().getFullYear()} Prathmesh Barapatre. All rights reserved.
                        </div>

                        <div className='flex gap-8 order-1 md:order-2'>
                            <a
                                href="https://github.com/prathameshbarapatre5"
                                target="_blank"
                                className='group text-secondary hover:text-primary transition-colors text-xl font-semibold relative'
                            >
                                GitHub
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/prathmesh-barapatre/"
                                target="_blank"
                                className='group text-secondary hover:text-primary transition-colors text-xl font-semibold relative'
                            >
                                LinkedIn
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a
                                href="mailto:barapatre.p@northeastern.edu"
                                className='group text-secondary hover:text-primary transition-colors text-xl font-semibold relative'
                            >
                                Email
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a
                                href="https://www.nss-mumbai.org"
                                target="_blank"
                                className='group text-secondary hover:text-primary transition-colors text-xl font-semibold relative'
                            >
                                NSS Mumbai
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
