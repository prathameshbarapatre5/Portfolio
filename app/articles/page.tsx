"use client";
import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen, Globe, Mic, Headphones, FileText, Award } from 'lucide-react'
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

const PublicationCard = ({ title, conference, year, type, description, link, featured }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-xl border ${featured ? 'border-purple-500/50 dark:border-purple-400/50' : 'border-gray-200 dark:border-gray-800'} bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className={`relative ${featured ? 'p-8' : 'p-6'}`}>
                <div className='space-y-4'>
                    {/* Icon & Badge */}
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

                    {/* Title */}
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

                    {/* Description */}
                    <p className={`${featured ? 'text-base' : 'text-sm'} text-secondary dark:text-gray-400 leading-relaxed`}>
                        {description}
                    </p>

                    {/* Link */}
                    {link && (
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all text-sm'
                        >
                            View Publication
                            <ArrowRight size={16} />
                        </Link>
                    )}
                </div>
            </div>
        </motion.article>
    )
}

const SpotifyEmbed = ({ embedUrl, title }: any) => {
    return (
        <motion.div
            variants={itemVariants}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 p-4'
        >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className='relative'>
                <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-gray-200 dark:border-gray-700'>
                        <Mic className='text-green-600 dark:text-green-400' size={20} />
                    </div>
                    <h3 className='text-lg font-bold text-dark dark:text-light'>
                        {title}
                    </h3>
                </div>
                
                <div className='w-full overflow-hidden rounded-xl'>
                    <iframe 
                        data-testid="embed-iframe" 
                        style={{ borderRadius: '12px' }} 
                        src={embedUrl}
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        title={title}
                    />
                </div>
            </div>
        </motion.div>
    )
}

const MagazineCard = ({ title, description, edition, date, readTime, link, category, icon }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300'
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative p-6 lg:p-8'>
                <div className='space-y-4'>
                    <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl border border-gray-200 dark:border-gray-700'>
                        {icon}
                    </div>

                    <span className='inline-block px-3 py-1 bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark rounded-full text-xs font-semibold uppercase tracking-wide'>
                        {category}
                    </span>

                    {edition && (
                        <div className='text-sm font-semibold text-secondary dark:text-gray-400'>
                            {edition}
                        </div>
                    )}

                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <h2 className='text-2xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors'>
                            {title}
                        </h2>
                    </Link>

                    <p className='text-secondary dark:text-gray-400 leading-relaxed'>
                        {description}
                    </p>

                    <div className='flex items-center gap-4 text-sm text-secondary dark:text-gray-500 pt-2'>
                        {date && (
                            <div className='flex items-center gap-1.5'>
                                <Calendar size={16} />
                                <span>{date}</span>
                            </div>
                        )}
                        {readTime && (
                            <div className='flex items-center gap-1.5'>
                                <Clock size={16} />
                                <span>{readTime} min read</span>
                            </div>
                        )}
                    </div>

                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2 text-primary dark:text-primaryDark font-semibold hover:gap-3 transition-all pt-2'
                    >
                        Read Magazine
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}

const Articles = () => {
    // Research Publications
    const publications = [
        {
            title: "Smart Transportation for Terrestrial Flooding and Lunar Search and Rescue: Innovative Approaches to Environmental Assessment and Funding for Space Sustainability",
            conference: "75th International Astronautical Congress (IAC)",
            year: "2024",
            type: "White Paper",
            description: "Published through International Space University (ISU SSP 2024). This comprehensive white paper explores dual-use smart transportation technologies for disaster response on Earth and the Moon. Part one addresses flood mitigation in urban areas, while part two proposes advanced lunar Search and Rescue operations using AI-equipped spacesuits, pressurized rovers, and robust communication networks for sustainable human lunar presence.",
            link: "#",
            featured: true
        },
        {
            title: "Space-based Solar Power Satellite and Assembly using Space Robotics",
            conference: "SpaceOps 2023",
            year: "2023",
            type: "Conference Paper",
            description: "Presented at SpaceOps 2023 in Dubai, hosted by Mohammed bin Rashid Space Center (MBRSC). This paper showcases a model for sustaining Space-based Solar Power Satellite Systems (SSPSS) using space robotics while collaborating with global space-based service platforms.",
            link: "#"
        },
        {
            title: "Titan Robotic Mission: Mapping and Sampling of Land and Lake",
            conference: "SpaceOps 2023",
            year: "2023",
            type: "Conference Paper",
            description: "Presented at SpaceOps 2023 in Dubai. This research showcases an innovative rover mission concept for Titan to map and collect samples from its sandy surface and methane lakes, which experts speculate could host life in hydrocarbon form.",
            link: "#"
        },
        {
            title: "Lunar Mining and Mapping using Multipurpose Autonomous Rover",
            conference: "72nd International Astronautical Conference (IAC)",
            year: "2021",
            type: "Conference Paper",
            description: "Published and presented at IAC 2021. This paper explores autonomous rover technology for lunar resource extraction and surface mapping, addressing key challenges in lunar exploration and resource utilization.",
            link: "#"
        },
        {
            title: "Titan Exploration using Autonomous Droneboat with Sample Analysis and Visual Perspective",
            conference: "72nd International Astronautical Conference (IAC)",
            year: "2021",
            type: "Conference Paper",
            description: "Presented at IAC 2021. This research proposes an innovative autonomous droneboat design for exploring Titan's methane lakes, incorporating sample analysis capabilities and advanced visual sensing systems.",
            link: "#"
        },
        {
            title: "Lunar Cave Exploration using Autonomous Rover Sample Collection and Analysis",
            conference: "72nd International Astronautical Conference (IAC)",
            year: "2021",
            type: "Conference Paper & Poster",
            description: "Published paper and interactive poster presented at IAC 2021. This work focuses on autonomous exploration of lunar caves, including sample collection and in-situ analysis for potential habitation and scientific discovery.",
            link: "#"
        }
    ];

    // Spotify embedded podcasts
    const spotifyEmbeds = [
        {
            title: "Episode 1: Space Exploration Insights",
            embedUrl: "https://open.spotify.com/embed/episode/2JQuT3FOwkgpc0Vebqwo5o?utm_source=generator&theme=0"
        },
        {
            title: "Episode 2: Robotics & Innovation",
            embedUrl: "https://open.spotify.com/embed/episode/6vyMIsAapzFZei1kduEwSZ?utm_source=generator"
        },
        {
            title: "Episode 3: Future of Space Technology",
            embedUrl: "https://open.spotify.com/embed/episode/2DAsZd26EPPtrh61dLnrT3?utm_source=generator"
        }
    ];

    // CosmicWeb Magazine editions
    const magazines = [
        {
            title: "Gravity's Echo: Waves of the Cosmos",
            description: "Explore the fascinating world of gravitational waves and their impact on our understanding of the universe. Discover how these cosmic ripples reveal the secrets of black holes, neutron stars, and the fabric of spacetime itself.",
            edition: "Special Edition",
            category: "Space Science",
            date: "2024",
            readTime: 15,
            icon: "🌊",
            link: "https://online.fliphtml5.com/mydwa/wtjf/"
        },
        {
            title: "CosmicWeb Magazine - Edition 7",
            description: "The official magazine of NSS Mumbai featuring the latest developments in space exploration, technology, and science. This edition covers cutting-edge research, space missions, and insights from the space community.",
            edition: "Edition 7",
            category: "Space Magazine",
            date: "2024",
            readTime: 20,
            icon: "🌌",
            link: "https://pubhtml5.com/ajfv/ikqe/"
        },
        {
            title: "CosmicWeb Magazine - Latest Edition",
            description: "Latest edition of CosmicWeb featuring comprehensive coverage of space exploration advancements, NASA missions, emerging space technologies, and contributions from space enthusiasts and professionals worldwide.",
            edition: "Latest Edition",
            category: "Space Magazine",
            date: "2024",
            readTime: 20,
            icon: "🚀",
            link: "https://online.pubhtml5.com/ajfv/kxij/#p=2"
        },
        {
            title: "CosmicWeb Special Issue",
            description: "Special issue exploring breakthrough discoveries in astronomy, space technology innovations, and the future of human space exploration. Features in-depth articles, interviews with space experts, and stunning imagery.",
            edition: "Special Issue",
            category: "Space Magazine",
            date: "2024",
            readTime: 18,
            icon: "✨",
            link: "https://online.pubhtml5.com/dwjz/oeue/#p=2"
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
                        Publications & <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Media</span>
                    </h1>
                    <p className='text-secondary dark:text-gray-400 text-lg max-w-3xl mx-auto'>
                        Research papers, podcasts, magazines, and articles exploring space exploration, robotics, and technology
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
                            Research <span className='text-purple-600 dark:text-purple-400'>Publications</span>
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
                                    have been presented at premier international conferences including IAC and SpaceOps.
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

                {/* Podcasts Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='mb-20'
                >
                    <div className='flex items-center gap-3 mb-8'>
                        <Headphones className='text-green-600 dark:text-green-400' size={32} />
                        <h2 className='text-3xl font-bold text-dark dark:text-light'>
                            NSS Mumbai <span className='text-green-600 dark:text-green-400'>Podcasts</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='mb-8 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-gray-200 dark:border-gray-800'
                    >
                        <div className='flex items-start gap-4'>
                            <div className='text-4xl'>🎙️</div>
                            <div>
                                <h3 className='text-xl font-bold mb-2 text-dark dark:text-light'>
                                    About the Podcast Series
                                </h3>
                                <p className='text-secondary dark:text-gray-400 leading-relaxed'>
                                    As President of NSS Mumbai, I host engaging conversations with space industry leaders, 
                                    researchers, and innovators. These podcasts cover the latest developments in space technology, 
                                    robotics, and STEM education, bringing expert insights to our global community. Listen directly 
                                    below or on Spotify!
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {spotifyEmbeds.map((embed, index) => (
                            <SpotifyEmbed key={index} {...embed} />
                        ))}
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className='mt-8 text-center'
                    >
                        <Link
                            href="https://open.spotify.com/show/53qLtKpPs8qg8SNY3fHrSs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg'
                        >
                            <Headphones size={20} />
                            View All Episodes on Spotify
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* CosmicWeb Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='mb-8'
                >
                    <div className='flex items-center gap-3 mb-8'>
                        <BookOpen className='text-primary dark:text-primaryDark' size={32} />
                        <h2 className='text-3xl font-bold text-dark dark:text-light'>
                            CosmicWeb <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Magazine</span>
                        </h2>
                    </div>

                    <div className='p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-gray-200 dark:border-gray-800 mb-8'>
                        <div className='flex items-start gap-4'>
                            <div className='text-4xl'>📖</div>
                            <div>
                                <h3 className='text-xl font-bold mb-2 text-dark dark:text-light'>
                                    About CosmicWeb Magazine
                                </h3>
                                <p className='text-secondary dark:text-gray-400 leading-relaxed'>
                                    CosmicWeb is the official magazine of NSS Mumbai, featuring cutting-edge space exploration news, 
                                    technology insights, and contributions from space enthusiasts worldwide. As President of NSS Mumbai, 
                                    I'm proud to be part of creating content that inspires the next generation of space explorers.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16'
                >
                    {magazines.map((magazine, index) => (
                        <MagazineCard key={index} {...magazine} />
                    ))}
                </motion.div>

                {/* Connect Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className='text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                >
                    <Globe className='mx-auto text-primary dark:text-primaryDark mb-4' size={48} />
                    <h3 className='text-2xl font-bold mb-3 text-dark dark:text-light'>
                        Stay Connected
                    </h3>
                    <p className='text-secondary dark:text-gray-400 mb-6 max-w-2xl mx-auto'>
                        Follow my research and media work across various platforms
                    </p>
                    <div className='flex justify-center gap-4 flex-wrap'>
                        <Link
                            href="https://www.linkedin.com/in/prathmesh-barapatre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg'
                        >
                            View LinkedIn Profile
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="https://www.nss-mumbai.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 px-6 py-3 border-2 border-dark dark:border-light text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark rounded-lg font-semibold transition-all'
                        >
                            Visit NSS Mumbai
                        </Link>
                    </div>
                </motion.div>
            </Layout>
        </main>
    )
}

export default Articles
