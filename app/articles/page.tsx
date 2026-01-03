"use client";
import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
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

const ArticleCard = ({ title, summary, date, readTime, link, category }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300'
        >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative p-6 lg:p-8'>
                <div className='space-y-4'>
                    {/* Category Badge */}
                    <span className='inline-block px-3 py-1 bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark rounded-full text-xs font-semibold uppercase tracking-wide'>
                        {category}
                    </span>

                    {/* Title */}
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <h2 className='text-2xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors line-clamp-2'>
                            {title}
                        </h2>
                    </Link>

                    {/* Summary */}
                    <p className='text-secondary dark:text-gray-400 leading-relaxed line-clamp-3'>
                        {summary}
                    </p>

                    {/* Meta Information */}
                    <div className='flex items-center gap-4 text-sm text-secondary dark:text-gray-500 pt-2'>
                        <div className='flex items-center gap-1.5'>
                            <Calendar size={16} />
                            <span>{date}</span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <Clock size={16} />
                            <span>{readTime} min read</span>
                        </div>
                    </div>

                    {/* Read More Link */}
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-primary dark:text-primaryDark font-semibold hover:gap-3 transition-all pt-2'
                    >
                        Read Article
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}

const Articles = () => {
    // Sample articles data - replace with your actual articles
    const articles = [
        {
            title: "The Future of Robotics in Space Exploration",
            summary: "Exploring how advanced robotics and AI are revolutionizing space missions and enabling unprecedented discoveries beyond Earth's orbit.",
            date: "Jan 2025",
            readTime: 8,
            category: "Space Technology",
            link: "#"
        },
        {
            title: "Building Autonomous Systems: Lessons Learned",
            summary: "A comprehensive guide to designing and implementing autonomous robotic systems, from sensor integration to decision-making algorithms.",
            date: "Dec 2024",
            readTime: 12,
            category: "Robotics",
            link: "#"
        },
        {
            title: "Mechatronics Design Principles for Modern Engineers",
            summary: "Essential principles and best practices for integrating mechanical, electrical, and software systems in modern engineering projects.",
            date: "Nov 2024",
            readTime: 10,
            category: "Engineering",
            link: "#"
        }
    ];

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
                        My <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Articles</span>
                    </h1>
                    <p className='text-center text-secondary dark:text-gray-400 text-lg max-w-2xl mx-auto'>
                        Thoughts, insights, and experiences from my journey in robotics and engineering
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'
                >
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </motion.div>

                {/* Coming Soon Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className='text-center mt-16 p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                >
                    <p className='text-secondary dark:text-gray-400 text-lg'>
                        More articles coming soon! Follow me on{' '}
                        <Link
                            href="https://www.linkedin.com/in/prathmesh-barapatre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-primary dark:text-primaryDark font-semibold hover:underline'
                        >
                            LinkedIn
                        </Link>
                        {' '}for updates.
                    </p>
                </motion.div>
            </Layout>
        </main>
    )
}

export default Articles
