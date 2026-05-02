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
                    <div className='w-full lg:w-1/2'>
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
                                <span className='text-7xl'>{icon}</span>
                            </div>
                        </Link>
                    </div>

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

const Project = ({ title, type, icon, link, github, summary, tags, stars }: any) => {
    return (
        <motion.article
            variants={itemVariants}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300'
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className='relative p-6'>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-300 mb-4 border border-gray-200 dark:border-gray-700">
                        <span className='text-5xl'>{icon}</span>
                    </div>
                </Link>

                <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                        <span className='text-primary dark:text-primaryDark font-semibold text-xs uppercase tracking-wide'>{type}</span>
                        {stars && stars > 0 && (
                            <div className='flex items-center gap-1 text-xs text-secondary'>
                                <span>⭐</span>
                                <span>{stars}</span>
                            </div>
                        )}
                    </div>
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
                    {/* Featured Projects */}
                    <FeaturedProject
                        type="Featured • Reinforcement Learning"
                        title="Navigating ISS with Reinforcement Learning"
                        summary="Custom Gymnasium environment for goal-conditioned navigation inside the International Space Station, inspired by NASA's Astrobee robot. Compares PPO and SAC across velocity and acceleration control regimes. Results align with real ISS deployment (APIARY)."
                        icon="🛰️"
                        link="https://github.com/prathameshbarapatre5/Navigating-ISS-with-Reinforcement-Learning"
                        github="https://github.com/prathameshbarapatre5/Navigating-ISS-with-Reinforcement-Learning"
                        tags={["Reinforcement Learning", "Python", "PPO", "SAC", "NASA Astrobee", "Gymnasium"]}
                    />

                    <FeaturedProject
                        type="Featured • Computer Vision & ML"
                        title="Deforestation Sentinel"
                        summary="Satellite-based tropical deforestation detection using Sentinel-2 imagery. Compares CNN (U-Net/ResNet-34) vs Vision Transformer (SegFormer-B2). Built with PyTorch, Streamlit, and Microsoft Planetary Computer. Achieves 77.87% mIoU."
                        icon="🌳"
                        link="https://github.com/prathameshbarapatre5/deforestation-sentinel"
                        github="https://github.com/prathameshbarapatre5/deforestation-sentinel"
                        tags={["Computer Vision", "PyTorch", "Sentinel-2", "U-Net", "SegFormer", "Deep Learning"]}
                    />

                    <FeaturedProject
                        type="Featured • Space Robotics"
                        title="GPS-Denied Martian Drone Navigation System"
                        summary="MATLAB-based simulation for autonomous Martian drone navigation using Visual SLAM, sensor fusion (EKF), and A* path planning. Features realistic Mars environment with 6-DOF flight dynamics, IMU/Barometer/LiDAR simulation, and cascaded PID control."
                        icon="🔴"
                        link="https://github.com/prathameshbarapatre5/GPS-Denied-Martian-Drone-Navigation-System"
                        github="https://github.com/prathameshbarapatre5/GPS-Denied-Martian-Drone-Navigation-System"
                        tags={["MATLAB", "Visual SLAM", "EKF", "Mars", "Autonomous Navigation", "Sensor Fusion"]}
                    />

                    <FeaturedProject
                        type="Featured • Lunar Robotics"
                        title="Lunar Crater Navigation & Terrain Localization"
                        summary="Autonomous navigation stack for lunar rovers in GPS-denied environments. Particle Filter fusing wheel odometry with visual crater detections for robust localization on the lunar surface."
                        icon="🌕"
                        link="https://github.com/prathameshbarapatre5/Lunar-Crater-Navigation-and-Terrain-Relative-Localization"
                        github="https://github.com/prathameshbarapatre5/Lunar-Crater-Navigation-and-Terrain-Relative-Localization"
                        tags={["ROS", "Particle Filter", "Computer Vision", "Autonomous Navigation"]}
                    />

                    {/* Regular Projects Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <Project
                            type="Computer Vision"
                            title="Computer Vision Projects"
                            summary="Collection of CV projects from CS5330: Calibration & AR, Content-Based Image Retrieval, Real-time 2D Object Recognition, Video Special Effects."
                            icon="👁️"
                            link="https://github.com/prathameshbarapatre5/Computer-Vision-Projects"
                            github="https://github.com/prathameshbarapatre5/Computer-Vision-Projects"
                            tags={["C++", "OpenCV", "CMake"]}
                        />
                        <Project
                            type="Computer Vision"
                            title="Lunar Crater Detection - LRO"
                            summary="Image processing algorithms to detect lunar craters using NASA's Lunar Reconnaissance Orbiter dataset with advanced preprocessing."
                            icon="🔭"
                            link="https://github.com/prathameshbarapatre5/Lunar-Crater-Detection-using-LRO-Dataset"
                            github="https://github.com/prathameshbarapatre5/Lunar-Crater-Detection-using-LRO-Dataset"
                            tags={["Python", "Computer Vision", "NASA"]}
                            stars={4}
                        />
                        <Project
                            type="Robotics • ROS 2"
                            title="ROS 2 Rover Navigation"
                            summary="ROS 2 Humble package simulating 4-wheel differential-drive rover navigating between dynamic waypoints in Gazebo."
                            icon="🤖"
                            link="https://github.com/prathameshbarapatre5/ros2-rover-navigation"
                            github="https://github.com/prathameshbarapatre5/ros2-rover-navigation"
                            tags={["ROS 2", "Python", "Gazebo"]}
                            stars={1}
                        />
                        <Project
                            type="Robotics • Sensors"
                            title="Robot Sensing and Navigation"
                            summary="Comprehensive EECE5554 coursework covering ROS 2, GPS/IMU integration, GNSS analysis, dead reckoning, and computer vision."
                            icon="📡"
                            link="https://github.com/prathameshbarapatre5/Robot-Sensing-and-Navigation"
                            github="https://github.com/prathameshbarapatre5/Robot-Sensing-and-Navigation"
                            tags={["ROS 2", "MATLAB", "Sensors"]}
                        />
                        <Project
                            type="Robotics • Kinematics"
                            title="UR3 Inverse Kinematics Simulation"
                            summary="6-DOF UR3 robot implementing numerical inverse kinematics using Newton-Raphson with DLS and task-space trajectory control."
                            icon="🦾"
                            link="https://github.com/prathameshbarapatre5/UR3-Inverse_kinematics-Simulation"
                            github="https://github.com/prathameshbarapatre5/UR3-Inverse_kinematics-Simulation"
                            tags={["Python", "Robotics", "IK"]}
                            stars={1}
                        />
                        <Project
                            type="Automotive • IoT"
                            title="Vehicle Control Unit - EV"
                            summary="Comprehensive control system for electric vehicles managing power distribution, battery monitoring, and vehicle dynamics."
                            icon="⚡"
                            link="https://github.com/prathameshbarapatre5/Vehicle-Control-Unit-for-Electric-Vehicle"
                            github="https://github.com/prathameshbarapatre5/Vehicle-Control-Unit-for-Electric-Vehicle"
                            tags={["Embedded", "IoT", "EV"]}
                        />
                        <Project
                            type="Web Development"
                            title="Portfolio - Professional Theme"
                            summary="Professional portfolio with dark/light mode and animated interactions. Showcases work in Robotics Engineering and Space Exploration."
                            icon="🌐"
                            link="https://github.com/prathameshbarapatre5/Portfolio"
                            github="https://github.com/prathameshbarapatre5/Portfolio"
                            tags={["Next.js", "TypeScript", "React"]}
                        />
                        <Project
                            type="Web Development"
                            title="Portfolio - Monochrome"
                            summary="Minimalist monochrome portfolio with glassmorphism effects and pure black & white space aesthetic."
                            icon="⚫"
                            link="https://github.com/prathameshbarapatre5/Portfolio"
                            github="https://github.com/prathameshbarapatre5/Portfolio"
                            tags={["Next.js", "Glassmorphism"]}
                        />
                    </div>

                    {/* CTA */}
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
                                View GitHub Profile (11 Repositories)
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
