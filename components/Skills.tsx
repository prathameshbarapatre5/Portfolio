"use client";
import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({ name, x, y }: { name: string, x: string, y: string }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    // Large list of skills as requested
    const skillList = [
        "Robotics", "Mechatronics", "Space Tech", "Python", "ROS", "C++", "MATLAB",
        "Research", "Teaching", "SolidWorks", "Control Systems",
        "Fusion 360", "Robotic System", "Arduino Uno / R4", "ESP 32", "Raspberry Pi 3",
        "TI MSP430 Controller", "CFD", "3D Printing", "Prototyping", "Simulink",
        "Machine Learning", "Deep Learning", "Neural Network"
    ]

    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-auto min-h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm mt-10 mb-20'>

                {/* 
                   Using a flexible cloud layout for better responsiveness with many items 
                   Instead of absolute positioning which is hard to maintain for 20+ items
                */}
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-8">
                    {skillList.map((item, index) => (
                        <motion.div
                            key={index}
                            className='rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"], transition: { duration: 1 } }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills
