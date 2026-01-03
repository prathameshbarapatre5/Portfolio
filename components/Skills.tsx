"use client";
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            title: "Robotics & Mechatronics",
            skills: ["Robotics", "Mechatronics", "ROS", "Control Systems", "Mobile Robotics", "Sensor Fusion"]
        },
        {
            title: "Programming",
            skills: ["Python", "C++", "MATLAB", "Simulink", "Arduino", "ESP32", "Raspberry Pi"]
        },
        {
            title: "Design & CAD",
            skills: ["SolidWorks", "Fusion 360", "3D Printing", "Prototyping", "CFD"]
        },
        {
            title: "AI & Machine Learning",
            skills: ["Deep Learning", "Neural Networks", "CNN", "Machine Learning"]
        },
        {
            title: "Space Technology",
            skills: ["Space Tech", "Satellite Systems", "Mission Planning"]
        },
        {
            title: "Leadership & Teaching",
            skills: ["Research", "Teaching", "Team Management", "Mentoring"]
        }
    ];

    return (
        <div className='mt-32 mb-20'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-5xl font-bold text-center mb-16'
            >
                Technical <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Skills</span>
            </motion.h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={categoryIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        viewport={{ once: true }}
                        className='p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow'
                    >
                        <h3 className='text-xl font-bold mb-4 text-primary dark:text-primaryDark'>
                            {category.title}
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            {category.skills.map((skill, skillIndex) => (
                                <motion.span
                                    key={skillIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className='px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-dark dark:text-light rounded-lg text-sm font-medium cursor-default hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors'
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
