"use client";
import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import profilePic from '@/public/images/profile-photo.jpg'

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
    visible: { opacity: 1, y: 0 }
};

export default function Home() {
    return (
        <main className='flex items-center min-h-[calc(100vh-80px)] w-full'>
            <Layout className='pt-0'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Text Content */}
                    <motion.div variants={itemVariants} className='flex flex-col space-y-6 order-2 lg:order-1'>
                        <div className="inline-block">
                            <span className="px-4 py-2 bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark rounded-full text-sm font-medium">
                                Robotics Engineer
                            </span>
                        </div>

                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Building the Future
                            </span>
                            <br />
                            <span className="text-dark dark:text-light">
                                With Robotics
                            </span>
                        </h1>

                        <p className='text-lg text-secondary dark:text-gray-300 leading-relaxed max-w-2xl'>
                            As a Robotics Engineer and President of NSS Mumbai, I explore advanced technologies for space exploration and automation. From designing mechanisms to mentoring students, I push the boundaries of innovation.
                        </p>

                        <div className='flex flex-wrap items-center gap-4 pt-4'>
                            <Link
                                href="https://drive.google.com/file/d/1SY4Z-OTDV3ZloRIsB4e7uzu-EGRddMaF/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                            >
                                <Download size={20} />
                                Resume
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="mailto:barapatre.p@northeastern.edu"
                                className="inline-flex items-center gap-2 border-2 border-dark dark:border-light text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                <Mail size={20} />
                                Contact
                            </Link>
                        </div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800"
                        >
                            <div>
                                <div className="text-3xl font-bold text-primary dark:text-primaryDark">5+</div>
                                <div className="text-sm text-secondary dark:text-gray-400 mt-1">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary dark:text-primaryDark">20+</div>
                                <div className="text-sm text-secondary dark:text-gray-400 mt-1">Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary dark:text-primaryDark">100+</div>
                                <div className="text-sm text-secondary dark:text-gray-400 mt-1">Students Mentored</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        variants={itemVariants}
                        className='order-1 lg:order-2 flex justify-center lg:justify-end'
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800">
                                <Image
                                    src={profilePic}
                                    alt="Prathmesh Barapatre"
                                    width={500}
                                    height={600}
                                    className="w-full h-auto"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Layout>
        </main>
    )
}
