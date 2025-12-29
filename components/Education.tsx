"use client";
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }: any) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Master of Science - MS, Robotics Engineering"
                        time="Jan 2025 - 2026"
                        place="Northeastern University"
                        info={
                            <div className='flex flex-col gap-2'>
                                <span>Grade: B+</span>
                                <div>
                                    <span className="font-bold">Courses taken:</span>
                                    <ul className="list-disc ml-5">
                                        <li>Deep Learning and Neural Networks</li>
                                        <li>Robot Sensing and Navigation</li>
                                        <li>Robot Mechanics and Control</li>
                                        <li>Mobile Robotics</li>
                                    </ul>
                                </div>
                                <span><strong className='font-bold'>Skills:</strong> Robot Operating System (ROS) • Sensor Data Fusion • Convolutional Neural Networks (CNN) • Deep Learning • Gazebo • A* Path Planning • Particle Filter</span>
                            </div>
                        }
                    />
                    <Details
                        type="Space Studies Program"
                        time="Jun 2024 - Aug 2024"
                        place="International Space University"
                        info={
                            <div className='flex flex-col gap-2'>
                                <p>Participated in the intensive eight-week program hosted by Rice University in collaboration with NASA Johnson Space Center, Houston, Texas. The curriculum focused on the intersection of international relations, diverse cultures, and multiple disciplines within the realm of space exploration.</p>
                                <p>Nominated and Elected to be Class Representative for the Batch of 2024.</p>
                                <p>Completed 55 core courses encompassing astronomy, astrophysics, space science, space art and culture, engineering, economics, business, management and more.</p>
                                <span><strong className='font-bold'>Department:</strong> Space Applications</span>
                                <span><strong className='font-bold'>Project:</strong> Lunar Satellite Navigation: Enhancing Rover Activities for Human Assistance and Infrastructure Development</span>
                                <span><strong className='font-bold'>Team Project:</strong> Contributed to the development of a white paper on &quot;Smart Transportation,&quot; exploring the application of &quot;Space Technology for Smart Transportation and Mobility&quot;.</span>
                                <span><strong className='font-bold'>Skills:</strong> International • Interculture • Interdisciplinary</span>
                            </div>
                        }
                    />
                    <Details
                        type="Bachelor of Engineering - BE, Mechatronics, Robotics, and Automation Engineering"
                        time="2018 - 2021"
                        place="Terna Engineering College"
                        info={
                            <div className='flex flex-col gap-2'>
                                <span><strong className='font-bold'>Skills:</strong> Software Systems • Creative Problem Solving • Object Oriented Design</span>
                            </div>
                        }
                    />
                    <Details
                        type="Diploma, Mechanical Engineering"
                        time="2016 - 2018"
                        place="Shivajirao S Jondhale College of Engineering"
                        info={
                            <div className='flex flex-col gap-2'>
                                <p>Completed Diploma in Mechanical Engineering</p>
                                <span><strong className='font-bold'>Skills:</strong> Object Oriented Design</span>
                            </div>
                        }
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education
