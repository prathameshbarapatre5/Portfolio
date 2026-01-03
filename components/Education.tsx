"use client";
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }: any) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-10 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-start justify-start'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className='ml-12 md:ml-8'
            >
                <h3 className='text-2xl font-bold text-dark dark:text-light'>
                    {type}
                </h3>
                <div className='text-secondary dark:text-gray-400 font-medium my-2'>
                    {time} | {place}
                </div>
                <div className='text-dark dark:text-light leading-relaxed'>
                    {info}
                </div>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='my-32'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-5xl font-bold text-center mb-16'
            >
                <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Education</span>
            </motion.h2>

            <div ref={ref} className='w-full mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-[18px] top-0 w-[2px] h-full bg-primary dark:bg-primaryDark origin-top"
                />
                <ul className='w-full flex flex-col items-start justify-between'>
                    <Details
                        type="Master of Science in Robotics Engineering"
                        time="Jan 2025 - 2026"
                        place="Northeastern University"
                        info={
                            <div className='space-y-2'>
                                <p className='font-semibold'>Courses:</p>
                                <ul className='list-disc ml-5 space-y-1'>
                                    <li>Deep Learning and Neural Networks</li>
                                    <li>Robot Sensing and Navigation</li>
                                    <li>Robot Mechanics and Control</li>
                                    <li>Mobile Robotics</li>
                                </ul>
                                <p className='text-sm text-secondary dark:text-gray-400 pt-2'>
                                    <strong>Key Skills:</strong> ROS, Sensor Fusion, CNN, Deep Learning, Gazebo, A* Path Planning, Particle Filter
                                </p>
                            </div>
                        }
                    />
                    <Details
                        type="Space Studies Program"
                        time="Jun 2024 - Aug 2024"
                        place="International Space University at Rice University"
                        info={
                            <div className='space-y-2'>
                                <p>Intensive eight-week program hosted by Rice University in collaboration with NASA Johnson Space Center, Houston, Texas.</p>
                                <p className='font-semibold'>Highlights:</p>
                                <ul className='list-disc ml-5 space-y-1'>
                                    <li>Elected Class Representative for Batch 2024</li>
                                    <li>Completed 55 core courses in space science, engineering, and business</li>
                                    <li>Team Project: "Lunar Satellite Navigation for Rover Operations"</li>
                                    <li>White Paper: "Space Technology for Smart Transportation"</li>
                                </ul>
                            </div>
                        }
                    />
                    <Details
                        type="Bachelor of Engineering - Mechatronics, Robotics, and Automation"
                        time="2018 - 2021"
                        place="Terna Engineering College"
                        info="Comprehensive program covering robotics, automation systems, control theory, and mechatronics design principles."
                    />
                    <Details
                        type="Diploma in Mechanical Engineering"
                        time="2016 - 2018"
                        place="Shivajirao S Jondhale College of Engineering"
                        info="Foundation in mechanical engineering principles, design, and manufacturing processes."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
