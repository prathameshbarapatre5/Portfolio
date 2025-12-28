"use client";
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion.div // Using a div placeholder instead of Image for simplicity in animation component

const MovingImg = ({ title, img, link }: any) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef<HTMLDivElement>(null)

    function handleMouse(event: any) {
        if (imgRef.current) {
            imgRef.current.style.display = 'inline-block'
            x.set(event.pageX)
            y.set(-10)
        }
    }

    function handleMouseLeave(event: any) {
        if (imgRef.current) {
            imgRef.current.style.display = 'none'
            x.set(0)
            y.set(0)
        }
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} className='z-10 w-96 h-auto hidden absolute rounded-lg bg-gray-400 p-2'
            >
                <div className="w-full h-48 bg-gray-500 text-white flex items-center justify-center">Article Image</div>
            </FramerImage>
        </Link>
    )
}

const Article = ({ img, title, date, link }: any) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
        >
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }: any) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <div className="w-full h-auto bg-gray-400 aspect-[2/1] flex items-center justify-center text-white">Featured Image</div>
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const Articles = () => {
    return (
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle
                        title="The Future of Commercial Space Stations"
                        summary="Exploring the economic and technological viability of LEO commercial stations in the post-ISS era."
                        time="9 min read"
                        link="#"
                        img="/"
                    />
                    <FeaturedArticle
                        title="Robotics in Education: Formatting the Future"
                        summary="How introducing robotics at K12 level impacts STEM adoption and critical thinking skills in students."
                        time="9 min read"
                        link="#"
                        img="/"
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-32 mt-32'>All Articles</h2>
                <ul>
                    <Article
                        title="Space Solar Power: The Green Energy Solution from Orbit"
                        date="March 22, 2023"
                        link="#"
                        img="/"
                    />
                    <Article
                        title="Understanding Swerve Drive Kinematics"
                        date="June 10, 2022"
                        link="#"
                        img="/"
                    />
                    <Article
                        title="Getting Started with ROS and Gazebo"
                        date="Jan 15, 2021"
                        link="#"
                        img="/"
                    />
                </ul>
            </Layout>
        </main>
    )
}

export default Articles
