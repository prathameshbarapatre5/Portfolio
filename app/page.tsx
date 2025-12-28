"use client";
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons' // Need to create this icon or remove
import HireMe from '@/components/HireMe' // Need to create
import lightBulb from '@/public/images/svgs/miscellaneous_icons_1.svg' // Placeholder import, will comment out

// We will use standard generic content where images are missing

export default function Home() {
    return (
        <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
            <Layout className='pt-0 md:pt-16 sm:pt-8'>
                <div className="flex items-center justify-between w-full lg:flex-col">
                    <div className='w-1/2 md:w-full'>
                        {/* Image Placeholder */}
                        <div className="w-full h-auto bg-gray-400 rounded-lg aspect-[3/4] flex items-center justify-center">
                            <span className="text-white">Profile Image</span>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                        <AnimatedText text="Turning Vision Into Reality With Code And Engineering." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
                        <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                            As a skilled Robotics Engineer and President of NSS Mumbai, I am dedicated to exploring advanced technologies for space exploration. From designing mechanisms to mentoring students, my goal is to push the boundaries of what's possible.
                        </p>
                        <div className='flex items-center self-start mt-2 lg:self-center'>
                            <Link href="/resume.pdf" target={"_blank"}
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all md:p-2 md:px-4 md:text-base"
                                distinct-id="resume-btn" // specific ID
                            >
                                Resume
                            </Link>
                            <Link href="mailto:prathmesh.barapatre@example.com" target={"_blank"}
                                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>

            <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
                {/* <Image src={lightBulb} alt="Prathmesh" className='w-full h-auto' /> */}
            </div>
        </main>
    )
}
