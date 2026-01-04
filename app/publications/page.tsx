"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Award, Calendar, ExternalLink, ArrowRight, Video, Play } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Publications = () => {
    const publications = [
        {
            title: "Smart Transportation for Terrestrial Flooding and Lunar Search and Rescue",
            conference: "75th IAC",
            year: "2024",
            type: "White Paper",
            description: "ISU white paper on dual-use smart transportation for Earth disaster response and lunar Search & Rescue operations.",
            link: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=12066",
            featured: true
        },
        {
            title: "Space-based Solar Power Satellite and Assembly using Space Robotics",
            conference: "SpaceOps 2023",
            year: "2023",
            type: "Paper",
            description: "Model for sustaining SSPSS using space robotics with global platform collaboration.",
            link: "https://star.spaceops.org/2023/user_manudownload.php?doc=519__89sqyus0.pdf"
        },
        {
            title: "Titan Robotic Mission: Mapping and Sampling of Land and Lake",
            conference: "SpaceOps 2023",
            year: "2023",
            type: "Paper",
            description: "Rover mission concept for Titan to map and collect samples from methane lakes.",
            link: "https://star.spaceops.org/2023/user_manudownload.php?doc=371__0s5sq3vn.pdf"
        },
        {
            title: "Lunar Mining and Mapping using Multipurpose Autonomous Rover",
            conference: "IAC 2021",
            year: "2021",
            type: "Paper",
            description: "Autonomous rover technology for lunar resource extraction and surface mapping.",
            link: "https://dl.iafastro.directory/event/IAC-2021/paper/66095/"
        },
        {
            title: "Titan Exploration using Autonomous Droneboat",
            conference: "IAC 2021",
            year: "2021",
            type: "Paper",
            description: "Autonomous droneboat design for exploring Titan's methane lakes with sample analysis.",
            link: "https://dl.iafastro.directory/event/IAC-2021/paper/66117/"
        },
        {
            title: "Lunar Cave Exploration using Autonomous Rover",
            conference: "IAC 2021",
            year: "2021",
            type: "Paper & Poster",
            description: "Autonomous exploration of lunar caves for potential habitation and scientific discovery.",
            link: "https://dl.iafastro.directory/event/IAC-2021/paper/66112/"
        }
    ];

    const talks = [
        {
            title: "Space Technology & Career Opportunities",
            description: "Career pathways in space industry and transitioning into space technology roles.",
            link: "https://youtu.be/ttAQ8XNq97I?si=3N6W2xkjo5_v4LcB"
        },
        {
            title: "Robotics & Space Exploration",
            description: "Role of robotics in space missions and future of robotic technologies.",
            link: "https://youtu.be/jTZgHB3ZYWI?si=JFOsomS8inejVwCD"
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
                        Research <span className='text-gradient'>Publications</span>
                    </h1>
                    <p className='text-xl text-secondary max-w-2xl mx-auto'>
                        Academic papers and presentations on space robotics
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='mb-20'
                >
                    <div className='flex items-center gap-3 mb-10'>
                        <FileText className='text-primary' size={32} />
                        <h2 className='text-3xl font-bold'>Conference Papers</h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {publications.map((pub, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className={`glass p-8 rounded-2xl neon-border hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all group relative overflow-hidden
                                    ${pub.featured ? 'md:col-span-2 border-primary/50' : ''}
                                `}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500"></div>
                                
                                <div className='relative'>
                                    <div className='flex items-start justify-between mb-4'>
                                        <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30'>
                                            <FileText className='text-primary' size={24} />
                                        </div>
                                        <div className='flex gap-2'>
                                            {pub.featured && (
                                                <span className='px-3 py-1 bg-gradient-to-r from-accent/20 to-primary/20 text-accent rounded-full text-xs font-bold uppercase border border-accent/30'>
                                                    Featured
                                                </span>
                                            )}
                                            <span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase border border-primary/30'>
                                                {pub.type}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className='text-xl font-bold mb-3 text-light group-hover:text-gradient transition-all'>
                                        {pub.title}
                                    </h3>

                                    <div className='flex items-center gap-4 text-sm text-secondary mb-4'>
                                        <div className='flex items-center gap-1.5'>
                                            <Award size={14} />
                                            <span className='font-semibold'>{pub.conference}</span>
                                        </div>
                                        <div className='flex items-center gap-1.5'>
                                            <Calendar size={14} />
                                            <span>{pub.year}</span>
                                        </div>
                                    </div>

                                    <p className='text-secondary leading-relaxed mb-6'>
                                        {pub.description}
                                    </p>

                                    <Link
                                        href={pub.link}
                                        target="_blank"
                                        className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary font-semibold text-sm transition-all border border-primary/30'
                                    >
                                        <ExternalLink size={16} />
                                        View Publication
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='mb-20'
                >
                    <div className='flex items-center gap-3 mb-10'>
                        <Video className='text-accent' size={32} />
                        <h2 className='text-3xl font-bold'>Talks & Presentations</h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {talks.map((talk, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className='glass rounded-2xl overflow-hidden neon-border hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all group'
                            >
                                <Link href={talk.link} target="_blank" className='block'>
                                    <div className='relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center'>
                                        <Video className='text-primary/50' size={64} />
                                        <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center'>
                                            <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform'>
                                                <Play className='text-white ml-1' size={28} fill="white" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-6'>
                                        <h3 className='text-xl font-bold mb-2 text-light group-hover:text-primary transition-colors'>
                                            {talk.title}
                                        </h3>
                                        <p className='text-secondary text-sm'>{talk.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-6'
                >
                    {[
                        { value: "6", label: "Conference Papers" },
                        { value: "2", label: "Public Talks" },
                        { value: "3", label: "Premier Conferences" }
                    ].map((stat, i) => (
                        <div key={i} className='glass p-8 rounded-2xl neon-border text-center hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all'>
                            <div className='text-5xl font-bold text-primary mb-2'>{stat.value}</div>
                            <div className='text-sm text-secondary font-semibold'>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </main>
    )
}

export default Publications
