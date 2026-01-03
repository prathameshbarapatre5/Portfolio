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

const FeaturedProject = ({ type, title, summary, icon, link, github, tags }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300'
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative p-8 lg:p-10'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Icon */}
                    <div className='w-full lg:w-1/2'>
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
                                <span className='text-7xl'>{icon}</span>
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
                        {tags && (
                            <div className='flex flex-wrap gap-2'>
                                {tags.map((tag: string, index: number) => (
                                    <span key={index} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
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
                                View Project
                                <ExternalLink size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    )
}

const Project = ({ title, type, icon, link, github, summary, tags }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300'
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative p-6'>
                {/* Icon */}
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300 mb-4 border border-gray-200 dark:border-gray-700">
                        <span className='text-5xl'>{icon}</span>
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
                    <p className='text-sm text-secondary dark:text-gray-400 line-clamp-3 leading-relaxed'>
                        {summary}
                    </p>

                    {tags && (
                        <div className='flex flex-wrap gap-1.5 pt-2'>
                            {tags.slice(0, 3).map((tag: string, index: number) => (
                                <span key={index} className='px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

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
                        Robotics, Space Technology, and AI/ML Projects
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='space-y-16'
                >
                    {/* Featured Project 1 */}
                    <FeaturedProject
                        type="Featured Project • Space Robotics"
                        title="Lunar Crater Navigation & Terrain-Relative Localization"
                        summary="An autonomous navigation stack for lunar rovers operating in GPS-denied environments. Implements a Particle Filter that fuses wheel odometry with visual crater detections for robust localization on the lunar surface."
                        icon="🌕"
                        link="https://github.com/prathameshbarapatre5/Lunar-Crater-Navigation-and-Terrain-Relative-Localization"
                        github="https://github.com/prathameshbarapatre5/Lunar-Crater-Navigation-and-Terrain-Relative-Localization"
                        tags={["ROS", "Particle Filter", "Computer Vision", "Autonomous Navigation", "Lunar Robotics"]}
                    />

                    {/* Featured Project 2 */}
                    <FeaturedProject
                        type="Featured Project • Computer Vision"
                        title="Lunar Crater Detection using LRO Dataset"
                        summary="Image processing and computer vision algorithms to detect and analyze lunar craters using NASA's Lunar Reconnaissance Orbiter dataset. Features advanced preprocessing, crater detection, and visualization techniques."
                        icon="🛰️"
                        link="https://github.com/prathameshbarapatre5/Lunar-Crater-Detection-using-LRO-Dataset"
                        github="https://github.com/prathameshbarapatre5/Lunar-Crater-Detection-using-LRO-Dataset"
                        tags={["Python", "Computer Vision", "Image Processing", "NASA Data", "Space Science"]}
                    />

                    {/* Regular Projects Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <Project
                            type="Robotics • Kinematics"
                            title="UR3 Inverse Kinematics Simulation"
                            summary="6-DOF UR3 robot simulation implementing numerical inverse kinematics using Newton-Raphson with DLS and task-space trajectory control built from scratch."
                            icon="🦾"
                            link="https://github.com/prathameshbarapatre5/UR3-Inverse_kinematics-Simulation"
                            github="https://github.com/prathameshbarapatre5/UR3-Inverse_kinematics-Simulation"
                            tags={["Python", "Robotics", "Inverse Kinematics", "Simulation"]}
                        />
                        <Project
                            type="Automotive • IoT"
                            title="Vehicle Control Unit for Electric Vehicle"
                            summary="Comprehensive control system for electric vehicles, managing power distribution, battery monitoring, and vehicle dynamics control."
                            icon="⚡"
                            link="https://github.com/prathameshbarapatre5/Vehicle-Control-Unit-for-Electric-Vehicle"
                            github="https://github.com/prathameshbarapatre5/Vehicle-Control-Unit-for-Electric-Vehicle"
                            tags={["Embedded Systems", "Electric Vehicle", "Control Systems"]}
                        />
                        <Project
                            type="Web Development"
                            title="Portfolio Website"
                            summary="Personal portfolio featuring dark/light mode, animated interactions, and showcasing work in Robotics Engineering and Space Exploration. Built with Next.js."
                            icon="🌐"
                            link="https://github.com/prathameshbarapatre5/Portfolio"
                            github="https://github.com/prathameshbarapatre5/Portfolio"
                            tags={["Next.js", "TypeScript", "React", "Tailwind CSS"]}
                        />
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className='text-center pt-8'
                    >
                        <div className='p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-gray-200 dark:border-gray-800'>
                            <h3 className='text-2xl font-bold mb-3 text-dark dark:text-light'>
                                Explore More Projects
                            </h3>
                            <p className='text-secondary dark:text-gray-400 mb-6 max-w-2xl mx-auto'>
                                Check out my GitHub profile for more robotics, space technology, and machine learning projects
                            </p>
                            <Link
                                href="https://github.com/prathameshbarapatre5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='inline-flex items-center gap-2 px-8 py-3 bg-dark dark:bg-light text-light dark:text-dark hover:bg-dark/90 dark:hover:bg-light/90 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl'
                            >
                                <Github size={20} />
                                View GitHub Profile
                                <ExternalLink size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </Layout>
        </main>
    )
}

export default Projects
