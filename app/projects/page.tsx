"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
    const projects = [
        {
            title: "Lunar Crater Navigation & Terrain Localization",
            description: "Autonomous navigation stack for lunar rovers in GPS-denied environments. Particle Filter fusing odometry with crater detection for robust localization.",
            icon: "🌕",
            github: "https://github.com/prathameshbarapatre5/Lunar-Crater-Navigation-and-Terrain-Relative-Localization",
            tags: ["ROS", "Particle Filter", "Computer Vision", "Navigation"],
            size: "large"
        },
        {
            title: "Lunar Crater Detection - LRO Dataset",
            description: "Image processing algorithms to detect lunar craters using NASA's Lunar Reconnaissance Orbiter dataset.",
            icon: "🛰️",
            github: "https://github.com/prathameshbarapatre5/Lunar-Crater-Detection-using-LRO-Dataset",
            tags: ["Python", "CV", "NASA Data"],
            size: "normal"
        },
        {
            title: "UR3 Inverse Kinematics Simulation",
            description: "6-DOF robot simulation with numerical inverse kinematics using Newton-Raphson and DLS methods.",
            icon: "🦾",
            github: "https://github.com/prathameshbarapatre5/UR3-Inverse_kinematics-Simulation",
            tags: ["Python", "Robotics", "IK"],
            size: "normal"
        },
        {
            title: "Robot Sensing & Navigation",
            description: "Comprehensive ROS 2 coursework covering GPS/IMU integration, sensor fusion, dead reckoning, and computer vision.",
            icon: "🤖",
            github: "https://github.com/prathameshbarapatre5/Robot-Sensing-and-Navigation",
            tags: ["ROS 2", "Sensors", "SLAM"],
            size: "wide"
        },
        {
            title: "Vehicle Control Unit - EV",
            description: "Control system for electric vehicles managing power distribution and vehicle dynamics.",
            icon: "⚡",
            github: "https://github.com/prathameshbarapatre5/Vehicle-Control-Unit-for-Electric-Vehicle",
            tags: ["Embedded", "IoT"],
            size: "normal"
        },
        {
            title: "Portfolio Website",
            description: "Modern portfolio with Artemis Control theme, glassmorphism effects, and mission control aesthetic.",
            icon: "🌐",
            github: "https://github.com/prathameshbarapatre5/Portfolio",
            tags: ["Next.js", "TypeScript"],
            size: "tall"
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
                        Featured <span className='text-gradient'>Projects</span>
                    </h1>
                    <p className='text-xl text-secondary max-w-2xl mx-auto'>
                        Robotics, Space Technology, and AI/ML innovations
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`group glass p-8 rounded-2xl neon-border hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all cursor-pointer relative overflow-hidden
                                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${project.size === 'wide' ? 'md:col-span-2' : ''}
                                ${project.size === 'tall' ? 'md:row-span-2' : ''}
                            `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
                            
                            <div className='relative z-10'>
                                <div className='text-6xl mb-6 filter drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]'>
                                    {project.icon}
                                </div>
                                
                                <h3 className='text-2xl font-bold mb-4 text-light group-hover:text-gradient transition-all'>
                                    {project.title}
                                </h3>
                                
                                <p className='text-secondary leading-relaxed mb-6'>
                                    {project.description}
                                </p>
                                
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {project.tags.map((tag, j) => (
                                        <span
                                            key={j}
                                            className='px-3 py-1 bg-primary/10 rounded-lg text-xs font-semibold text-primary border border-primary/20'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex items-center gap-4'>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'
                                    >
                                        <Github size={20} />
                                    </Link>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className='flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary font-semibold text-sm transition-all border border-primary/30'
                                    >
                                        View Project
                                        <ExternalLink size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='text-center mt-20'
                >
                    <div className='glass p-12 rounded-3xl neon-border max-w-3xl mx-auto hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all'>
                        <h3 className='text-3xl font-bold mb-4 text-gradient'>Explore More</h3>
                        <p className='text-secondary mb-8'>
                            Check out my GitHub for additional projects in robotics, space tech, and AI/ML
                        </p>
                        <Link
                            href="https://github.com/prathameshbarapatre5"
                            target="_blank"
                            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-bold text-dark hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all'
                        >
                            <Github size={20} />
                            View GitHub Profile
                            <ExternalLink size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

export default Projects
