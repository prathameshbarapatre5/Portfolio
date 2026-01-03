"use client";
import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeaturedProject = ({ type, title, summary, img, link, github }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300'
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative p-8 lg:p-10'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Image Placeholder */}
                    <div className='w-full lg:w-1/2'>
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
                                <span className='text-6xl'>🤖</span>
                            </div>
                        </Link>
                    </div>

                    {/* Content */}
                    <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-4'>
                        <span className='text-primary dark:text-primaryDark font-semibold text-sm uppercase tracking-wide'>{type}</span>
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <h2 className='text-3xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors'>
                                {title}
                            </h2>
                        </Link>
                        <p className='text-secondary dark:text-gray-400 leading-relaxed'>
                            {summary}
                        </p>
                        <div className='flex items-center gap-4 pt-4'>
                            <Link
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </Link>
                            <Link
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg'
                            >
                                Visit Project
                                <ExternalLink size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    )
}

const Project = ({ title, type, img, link, github }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300'
        >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative p-6'>
                {/* Image Placeholder */}
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300 mb-4 border border-gray-200 dark:border-gray-700">
                        <span className='text-4xl'>⚙️</span>
                    </div>
                </Link>

                {/* Content */}
                <div className='space-y-3'>
                    <span className='text-primary dark:text-primaryDark font-semibold text-xs uppercase tracking-wide'>{type}</span>
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <h2 className='text-xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors line-clamp-2'>
                            {title}
                        </h2>
                    </Link>

                    <div className='flex items-center justify-between pt-2'>
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-sm font-semibold text-primary dark:text-primaryDark hover:underline'
                        >
                            View Project →
                        </Link>
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.article>
    )
}

const Projects = () => {
    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center py-20'>
            <Layout className='pt-16'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='mb-16'
                >
                    <h1 className='text-5xl lg:text-6xl font-bold text-center mb-4'>
                        My <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Projects</span>
                    </h1>
                    <p className='text-center text-secondary dark:text-gray-400 text-lg'>
                        Imagination trumps knowledge
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='space-y-16'
                >
                    {/* Featured Project Example */}
                    <FeaturedProject
                        type="Featured Project"
                        title="Autonomous Navigation Robot"
                        summary="Developed an autonomous robot capable of navigating complex environments using advanced computer vision and SLAM algorithms. Implemented real-time obstacle detection and path planning for efficient navigation."
                        link="https://github.com"
                        github="https://github.com"
                    />

                    {/* Regular Projects Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <Project
                            type="Robotics"
                            title="Robotic Arm Controller"
                            link="https://github.com"
                            github="https://github.com"
                        />
                        <Project
                            type="AI/ML"
                            title="Object Detection System"
                            link="https://github.com"
                            github="https://github.com"
                        />
                        <Project
                            type="IoT"
                            title="Smart Home Automation"
                            link="https://github.com"
                            github="https://github.com"
                        />
                    </div>

                    {/* Add More Projects CTA */}
                    <motion.div
                        variants={itemVariants}
                        className='text-center pt-8'
                    >
                        <p className='text-secondary dark:text-gray-400 mb-4'>
                            More projects coming soon...
                        </p>
                        <Link
                            href="https://github.com/prathameshbarapatre5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-6 py-3 border-2 border-dark dark:border-light text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark rounded-lg font-semibold transition-all'
                        >
                            <Github size={20} />
                            View All on GitHub
                        </Link>
                    </motion.div>
                </motion.div>
            </Layout>
        </main>
    )
}

export default Projects
