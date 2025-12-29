"use client";
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons' // Need to create this icon or remove
import HireMe from '@/components/HireMe' // Need to create
// import lightBulb from '@/public/images/svgs/miscellaneous_icons_1.svg'

import profilePic from '@/public/images/profile-photo.jpg'

// We will use standard generic content where images are missing

export default function Home() {
    return (
        <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
            <Layout className='pt-0 md:pt-16 sm:pt-8'>
                <div className="flex items-center justify-between w-full flex-col lg:flex-row">
                    <div className='w-full md:w-full lg:w-1/2'>
                        <Image
                            src={profilePic}
                            alt="Prathamesh Barapatre"
                            width={500}
                            height={700}
                            className="w-full h-auto rounded-2xl md:inline-block md:w-full"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start self-center lg:text-left lg:pl-6'>
                        <AnimatedText text="Turning Vision Into Reality With Code And Engineering." className='!text-6xl !text-left xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl' />
                        <p className='my-4 text-base font-medium md:text-sm sm:text-xs text-center lg:text-left'>
                            As a skilled Robotics Engineer and President of NSS Mumbai, I am dedicated to exploring advanced technologies for space exploration. From designing mechanisms to mentoring students, my goal is to push the boundaries of what's possible.
                        </p>
                        <div className='flex items-center self-center lg:self-start mt-2'>
                            <Link href="https://drive.google.com/file/d/1SY4Z-OTDV3ZloRIsB4e7uzu-EGRddMaF/view?usp=sharing" target={"_blank"}
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all md:p-2 md:px-4 md:text-base"
                                distinct-id="resume-btn" // specific ID
                            >
                                Resume
                            </Link>
                            <Link href="mailto:barapatre.p@northeastern.edu" target={"_blank"}
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
