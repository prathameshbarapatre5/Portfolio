"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Headphones, BookOpen, Calendar, Clock, ArrowRight, Mic } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Articles = () => {
    const podcasts = [
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

    const magazines = [
        {
            title: "Gravity's Echo: Waves of the Cosmos",
            description: "Explore gravitational waves and their impact on understanding the universe.",
            edition: "Special Edition",
            date: "2024",
            readTime: 15,
            icon: "🌊",
            link: "https://online.fliphtml5.com/mydwa/wtjf/"
        },
        {
            title: "CosmicWeb Magazine - Edition 7",
            description: "Latest developments in space exploration, technology, and science from NSS Mumbai.",
            edition: "Edition 7",
            date: "2024",
            readTime: 20,
            icon: "🌌",
            link: "https://pubhtml5.com/ajfv/ikqe/"
        },
        {
            title: "CosmicWeb - Latest Edition",
            description: "Comprehensive coverage of NASA missions and emerging space technologies.",
            edition: "Latest",
            date: "2024",
            readTime: 20,
            icon: "🚀",
            link: "https://online.pubhtml5.com/ajfv/kxij/#p=2"
        },
        {
            title: "CosmicWeb Special Issue",
            description: "Breakthrough discoveries in astronomy and space technology innovations.",
            edition: "Special",
            date: "2024",
            readTime: 18,
            icon: "✨",
            link: "https://online.pubhtml5.com/dwjz/oeue/#p=2"
        }
    ];

    return (
        <main className='min-h-screen py-32'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center mb-20'
                >
                    <h1 className='text-5xl lg:text-7xl font-black mb-4'>
                        Articles & <span className='text-gradient'>Media</span>
                    </h1>
                    <p className='text-xl text-secondary max-w-2xl mx-auto'>
                        Podcasts and magazines exploring space and technology
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='mb-20'
                >
                    <div className='flex items-center gap-3 mb-10'>
                        <Headphones className='text-primary' size={32} />
                        <h2 className='text-3xl font-bold'>
                            NSS Mumbai <span className='text-primary'>Podcasts</span>
                        </h2>
                    </div>

                    <div className='glass p-8 rounded-2xl neon-border mb-10'>
                        <div className='flex items-start gap-4'>
                            <div className='text-4xl'>🎙️</div>
                            <div>
                                <h3 className='text-xl font-bold mb-2'>About the Podcast Series</h3>
                                <p className='text-secondary leading-relaxed'>
                                    Engaging conversations with space industry leaders, researchers, and innovators 
                                    covering developments in space technology, robotics, and STEM education.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
                        {podcasts.map((podcast, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className='glass p-6 rounded-2xl neon-border hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all'
                            >
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30'>
                                        <Mic className='text-primary' size={20} />
                                    </div>
                                    <h3 className='text-lg font-bold'>{podcast.title}</h3>
                                </div>
                                <iframe 
                                    style={{ borderRadius: '12px' }} 
                                    src={podcast.embedUrl}
                                    width="100%" 
                                    height="152" 
                                    frameBorder="0" 
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                    loading="lazy"
                                    title={podcast.title}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className='text-center'>
                        <Link
                            href="https://open.spotify.com/show/53qLtKpPs8qg8SNY3fHrSs"
                            target="_blank"
                            className='inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-full text-primary font-bold transition-all border border-primary/30'
                        >
                            <Headphones size={20} />
                            View All Episodes
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className='flex items-center gap-3 mb-10'>
                        <BookOpen className='text-primary' size={32} />
                        <h2 className='text-3xl font-bold'>
                            CosmicWeb <span className='text-gradient'>Magazine</span>
                        </h2>
                    </div>

                    <div className='glass p-8 rounded-2xl neon-border mb-10'>
                        <div className='flex items-start gap-4'>
                            <div className='text-4xl'>📖</div>
                            <div>
                                <h3 className='text-xl font-bold mb-2'>About CosmicWeb</h3>
                                <p className='text-secondary leading-relaxed'>
                                    Official magazine of NSS Mumbai featuring cutting-edge space exploration news, 
                                    technology insights, and contributions from space enthusiasts worldwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {magazines.map((mag, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className='glass p-8 rounded-2xl neon-border hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all group'
                            >
                                <div className='w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl mb-6 border border-light/10'>
                                    {mag.icon}
                                </div>

                                <div className='text-sm text-secondary mb-3'>{mag.edition}</div>

                                <Link href={mag.link} target="_blank">
                                    <h3 className='text-2xl font-bold mb-3 text-light group-hover:text-gradient transition-all'>
                                        {mag.title}
                                    </h3>
                                </Link>

                                <p className='text-secondary leading-relaxed mb-6'>
                                    {mag.description}
                                </p>

                                <div className='flex items-center gap-4 text-sm text-secondary mb-6'>
                                    <div className='flex items-center gap-1.5'>
                                        <Calendar size={14} />
                                        <span>{mag.date}</span>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <Clock size={14} />
                                        <span>{mag.readTime} min read</span>
                                    </div>
                                </div>

                                <Link
                                    href={mag.link}
                                    target="_blank"
                                    className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all'
                                >
                                    Read Magazine
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

export default Articles
