"use client";
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import { motion } from 'framer-motion'
import aboutPhoto from '@/public/images/about-photo.jpg'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
    return (
        <main className='flex w-full flex-col items-center justify-center min-h-screen py-20'>
            <Layout className='pt-16'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className='text-5xl lg:text-6xl font-bold text-center mb-4'>
                        About <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Me</span>
                    </h1>
                    <p className='text-center text-secondary dark:text-gray-400 text-lg mb-16'>
                        Passion fuels purpose
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20'
                >
                    {/* Biography */}
                    <motion.div variants={itemVariants} className='space-y-6'>
                        <div>
                            <h2 className='text-2xl font-bold mb-4 text-primary dark:text-primaryDark'>Biography</h2>
                            <div className='space-y-4 text-secondary dark:text-gray-300 leading-relaxed'>
                                <p>
                                    Hi, I'm <strong className='text-dark dark:text-light'>Prathmesh Barapatre</strong>, a Robotics Engineer and Space Enthusiast with a passion for creating functional, futuristic, and innovative technological solutions. With years of experience in mechatronics and leadership roles at the National Space Society.
                                </p>
                                <p>
                                    I believe that engineering is about more than just building things—it's about solving problems and creating solutions that can make a real difference in people's lives and advance human exploration.
                                </p>
                                <p>
                                    Whether I'm designing and manufacturing Electric Vehicles, planning space solar power missions, or mentoring the next generation of engineers, I bring my commitment to excellence and innovation to every project I work on.
                                </p>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className='grid grid-cols-2 gap-4 pt-6'>
                            <div className='p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'>
                                <div className='text-3xl font-bold text-primary dark:text-primaryDark mb-1'>5+</div>
                                <div className='text-sm text-secondary dark:text-gray-400'>Years Experience</div>
                            </div>
                            <div className='p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'>
                                <div className='text-3xl font-bold text-primary dark:text-primaryDark mb-1'>20+</div>
                                <div className='text-sm text-secondary dark:text-gray-400'>Projects Completed</div>
                            </div>
                            <div className='p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'>
                                <div className='text-3xl font-bold text-primary dark:text-primaryDark mb-1'>100+</div>
                                <div className='text-sm text-secondary dark:text-gray-400'>Students Mentored</div>
                            </div>
                            <div className='p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'>
                                <div className='text-3xl font-bold text-primary dark:text-primaryDark mb-1'>10+</div>
                                <div className='text-sm text-secondary dark:text-gray-400'>Publications</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div variants={itemVariants} className='flex items-center justify-center'>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
                            <div className='relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800'>
                                <Image
                                    src={aboutPhoto}
                                    alt="Prathmesh Barapatre"
                                    className='w-full h-auto'
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    )
}

export default About
