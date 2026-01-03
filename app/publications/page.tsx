"use client";
import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, ArrowRight, FileText, Award, ExternalLink, Video, Play } from 'lucide-react'
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

const TalkCard = ({ title, description, date, platform, link }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300'
        >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative'>
                {/* Thumbnail with Play Button */}
                <Link href={link} target="_blank" rel="noopener noreferrer" className='relative block'>
                    <div className='relative w-full aspect-video bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden'>
                        <Video className='text-red-600 dark:text-red-400' size={64} />
                        <div className='absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center'>
                            <div className='w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform'>
                                <Play className='text-white ml-1' size={28} fill="white" />
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Content */}
                <div className='p-6 space-y-3'>
                    <div className='flex items-center gap-2'>
                        <span className='px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold uppercase tracking-wide'>
                            {platform}
                        </span>
                        {date && (
                            <div className='flex items-center gap-1.5 text-xs text-secondary dark:text-gray-500'>
                                <Calendar size={12} />
                                <span>{date}</span>
                            </div>
                        )}
                    </div>

                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <h3 className='text-xl font-bold text-dark dark:text-light hover:text-red-600 dark:hover:text-red-400 transition-colors line-clamp-2'>
                            {title}
                        </h3>
                    </Link>

                    <p className='text-sm text-secondary dark:text-gray-400 leading-relaxed line-clamp-3'>
                        {description}
                    </p>

                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-semibold hover:gap-3 transition-all text-sm pt-2'
                    >
                        <Play size={16} />
                        Watch on YouTube
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}

const PublicationCard = ({ title, conference, year, type, description, link, featured }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-xl border ${featured ? 'border-purple-500/50 dark:border-purple-400/50' : 'border-gray-200 dark:border-gray-800'} bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className={`relative ${featured ? 'p-8' : 'p-6'}`}>
                <div className='space-y-4'>
                    <div className='flex items-start justify-between'>
                        <div className={`${featured ? 'w-14 h-14' : 'w-12 h-12'} rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center border border-gray-200 dark:border-gray-700`}>
                            <FileText className='text-purple-600 dark:text-purple-400' size={featured ? 24 : 20} />
                        </div>
                        <div className='flex gap-2'>
                            {featured && (
                                <span className='px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-semibold uppercase tracking-wide border border-yellow-500/30'>
                                    Featured
                                </span>
                            )}
                            <span className='px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold uppercase tracking-wide'>
                                {type}
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-dark dark:text-light mb-2 leading-tight`}>
                            {title}
                        </h3>
                        <div className='flex flex-wrap items-center gap-3 text-sm text-secondary dark:text-gray-400'>
                            <div className='flex items-center gap-1.5'>
                                <Award size={14} />
                                <span className='font-semibold'>{conference}</span>
                            </div>
                            <div className='flex items-center gap-1.5'>
                                <Calendar size={14} />
                                <span>{year}</span>
                            </div>
                        </div>
                    </div>

                    <p className={`${featured ? 'text-base' : 'text-sm'} text-secondary dark:text-gray-400 leading-relaxed`}>
                        {description}
                    </p>

                    {link && (
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm'
                        >
                            <ExternalLink size={16} />
                            View Publication
                            <ArrowRight size={16} />
                        </Link>
                    )}
                </div>
            </div>
        </motion.article>
    )
}

const Publications = () => {
    // Talks & Presentations
    const talks = [
        {
            title: "Space Technology & Career Opportunities",
            description: "An engaging talk exploring career pathways in the space industry, opportunities for engineers in space exploration, and how to transition into space technology roles without needing traditional aerospace backgrounds.",
            date: "2024",
            platform: "YouTube Talk",
            link: "https://youtu.be/ttAQ8XNq97I?si=3N6W2xkjo5_v4LcB"
        },
        {
            title: "Robotics & Space Exploration",
            description: "Discussing the role of robotics in modern space exploration, autonomous systems for planetary missions, and the future of robotic technologies in advancing human presence beyond Earth.",
            date: "2024",
            platform: "YouTube Talk",
            link: "https://youtu.be/jTZgHB3ZYWI?si=JFOsomS8inejVwCD"
        }
    ];

    // Research Publications
    const publications = [
        {
            title: "Smart Transportation for Terrestrial Flooding and Lunar Search and Rescue: Innovative Approaches to Environmental Assessment and Funding for Space Sustainability",
            conference: "75th International Astronautical Congress (IAC)",
            year: "2024",
            type: "White Paper",
            description: "Published through International Space University (ISU SSP 2024). This comprehensive white paper explores dual-use smart transportation technologies for disaster response on Earth and the Moon. Part one addresses flood mitigation in urban areas, while part two proposes advanced lunar Search and Rescue operations using AI-equipped spacesuits, pressurized rovers, and robust communication networks for sustainable human lunar presence.",
            link: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=12066",
            featured: true
        },
        {
            title: "Space-based Solar Power Satellite and Assembly using Space Robotics",
            conference: "SpaceOps 2023",
            year: "2023",
            type: "Conference Paper",
            description: "Presented at SpaceOps 2023 in Dubai, hosted by Mohammed bin Rashid Space Center (MBRSC). This paper showcases a model for sustaining Space-based Solar Power Satellite Systems (SSPSS) using space robotics while collaborating with global space-based service platforms.",
            link: "https://star.spaceops.org/2023/user_manudownload.php?doc=519__89sqyus0.pdf"
        },
        {
            title: "Titan Robotic Mission: Mapping and Sampling of Land and Lake",
            conference: "SpaceOps 2023",
            year: "2023",
            type: "Conference Paper",
            description: "Presented at SpaceOps 2023 in Dubai. This research showcases an innovative rover mission concept for Titan to map and collect samples from its sandy surface and methane lakes, which experts speculate could host life in hydrocarbon form.",
            link: "https://star.spaceops.org/2023/user_manudownload.php?doc=371__0s5sq3vn.pdf"
        },
        {
            title: "Lunar Mining and Mapping using Multipurpose Autonomous Rover",
            conference: "72nd International Astronautical Conference (IAC)",
            year: "2021",
            type: "Conference Paper",
            description: "Published and presented at IAC 2021. This paper explores autonomous rover technology for lunar resource extraction and surface mapping, addressing key challenges in lunar exploration and resource utilization.",
            link: "https://dl.iafastro.directory/event/IAC-2021/paper/66095/"
        },
        {
            title: "Titan Exploration using Autonomous Droneboat with Sample Analysis and Visual Perspective",
            conference: "72nd International Astronautical Conference (IAC)",
            year: "2021",
            type: "Conference Paper",
            description: "Presented at IAC 2021. This research proposes an innovative autonomous droneboat design for exploring Titan's methane lakes, incorporating sample analysis capabilities and advanced visual sensing systems.",
            link: "https://dl.iafastro.directory/event/IAC-2021/paper/66117/"
        },
        {
            title: "Lunar Cave Exploration using Autonomous Rover Sample Collection and Analysis",
            conference: "72nd International Astronautical Conference (IAC)",
            year: "2021",
            type: "Conference Paper & Poster",
            description: "Published paper and interactive poster presented at IAC 2021. This work focuses on autonomous exploration of lunar caves, including sample collection and in-situ analysis for potential habitation and scientific discovery.",
            link: "https://dl.iafastro.directory/event/IAC-2021/paper/66112/"
        }
    ];

    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center py-20'>
            <Layout className='pt-16'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='mb-16 text-center'
                >
                    <h1 className='text-5xl lg:text-6xl font-bold mb-4'>
                        Research <span className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>Publications</span>
                    </h1>
                    <p className='text-secondary dark:text-gray-400 text-lg max-w-3xl mx-auto'>
                        Academic papers, conference presentations, and talks on space robotics, planetary exploration, and emerging technologies
                    </p>
                </motion.div>

                {/* Research Publications Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='mb-20'
                >
                    <div className='flex items-center gap-3 mb-8'>
                        <FileText className='text-purple-600 dark:text-purple-400' size={32} />
                        <h2 className='text-3xl font-bold text-dark dark:text-light'>
                            Conference <span className='text-purple-600 dark:text-purple-400'>Papers</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='mb-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-gray-200 dark:border-gray-800'
                    >
                        <div className='flex items-start gap-4'>
                            <div className='text-4xl'>📄</div>
                            <div>
                                <h3 className='text-xl font-bold mb-2 text-dark dark:text-light'>
                                    Academic Contributions
                                </h3>
                                <p className='text-secondary dark:text-gray-400 leading-relaxed'>
                                    My research focuses on autonomous robotics for planetary exploration, space-based systems, smart 
                                    transportation for disaster response, and advanced technologies for deep space missions. These papers 
                                    have been presented at premier international conferences including IAC and SpaceOps, with full PDFs 
                                    available through official repositories.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {publications.map((pub, index) => (
                            <PublicationCard key={index} {...pub} />
                        ))}
                    </div>
                </motion.div>

                {/* Talks & Presentations Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='mb-20'
                >
                    <div className='flex items-center gap-3 mb-8'>
                        <Video className='text-red-600 dark:text-red-400' size={32} />
                        <h2 className='text-3xl font-bold text-dark dark:text-light'>
                            Talks & <span className='text-red-600 dark:text-red-400'>Presentations</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='mb-8 p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-gray-200 dark:border-gray-800'
                    >
                        <div className='flex items-start gap-4'>
                            <div className='text-4xl'>🎤</div>
                            <div>
                                <h3 className='text-xl font-bold mb-2 text-dark dark:text-light'>
                                    Public Speaking & Outreach
                                </h3>
                                <p className='text-secondary dark:text-gray-400 leading-relaxed'>
                                    I regularly give talks on space technology, robotics, and career opportunities in the space industry. 
                                    These presentations aim to inspire students and professionals to pursue careers in space exploration 
                                    and understand the diverse pathways available in this exciting field.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {talks.map((talk, index) => (
                            <TalkCard key={index} {...talk} />
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className='mb-16'
                >
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 dark:border-purple-400/20 text-center'>
                            <div className='text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2'>6</div>
                            <div className='text-sm font-semibold text-secondary dark:text-gray-400'>Conference Papers</div>
                        </div>
                        <div className='p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 dark:border-red-400/20 text-center'>
                            <div className='text-4xl font-bold text-red-600 dark:text-red-400 mb-2'>2</div>
                            <div className='text-sm font-semibold text-secondary dark:text-gray-400'>Public Talks</div>
                        </div>
                        <div className='p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 dark:border-blue-400/20 text-center'>
                            <div className='text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>3</div>
                            <div className='text-sm font-semibold text-secondary dark:text-gray-400'>Premier Conferences</div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className='text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                >
                    <FileText className='mx-auto text-purple-600 dark:text-purple-400 mb-4' size={48} />
                    <h3 className='text-2xl font-bold mb-3 text-dark dark:text-light'>
                        Interested in Collaboration?
                    </h3>
                    <p className='text-secondary dark:text-gray-400 mb-6 max-w-2xl mx-auto'>
                        I'm always open to research collaborations, speaking opportunities, and discussions about space robotics and exploration
                    </p>
                    <div className='flex justify-center gap-4 flex-wrap'>
                        <Link
                            href="https://www.linkedin.com/in/prathmesh-barapatre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg'
                        >
                            Connect on LinkedIn
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="mailto:barapatre.p@northeastern.edu"
                            className='inline-flex items-center gap-2 px-6 py-3 border-2 border-dark dark:border-light text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark rounded-lg font-semibold transition-all'
                        >
                            Email Me
                        </Link>
                    </div>
                </motion.div>
            </Layout>
        </main>
    )
}

export default Publications
