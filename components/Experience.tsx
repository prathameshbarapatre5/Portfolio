"use client";
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }: any) => {
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
                    {position}
                    {companyLink !== "#" ? (
                        <a href={companyLink} target="_blank" rel="noopener noreferrer" className='text-primary dark:text-primaryDark hover:underline'> @{company}</a>
                    ) : (
                        <span className='text-primary dark:text-primaryDark'> @{company}</span>
                    )}
                </h3>
                <div className='text-secondary dark:text-gray-400 font-medium my-2'>
                    {time} | {address}
                </div>
                <div className='text-dark dark:text-light leading-relaxed'>
                    {work}
                </div>
            </motion.div>
        </li>
    )
}

const Experience = () => {
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
                Professional <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Experience</span>
            </motion.h2>

            <div ref={ref} className='w-full mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-[18px] top-0 w-[2px] h-full bg-primary dark:bg-primaryDark origin-top"
                />
                <ul className='w-full flex flex-col items-start justify-between'>
                    <Details
                        position="Chapter Assembly Chair"
                        company="National Space Society"
                        companyLink="https://nss.org"
                        time="Aug 2023 - Present"
                        address="United States"
                        work="Leading the Chapter Assembly at the National Space Society, coordinating with chapters worldwide to advance space exploration advocacy and education."
                    />
                    <Details
                        position="Chapter Assembly Executive Secretary"
                        company="National Space Society"
                        companyLink="https://nss.org"
                        time="Jun 2022 - Aug 2023"
                        address="United States"
                        work="Served as Executive Secretary for the Chapter Assembly, managing communications and supporting international space advocacy initiatives."
                    />
                    <Details
                        position="Robotics Engineer"
                        company="JBCN International Schools"
                        companyLink="#"
                        time="Jan 2024 - Apr 2024"
                        address="Borivali, Maharashtra, India"
                        work="Mentored students in robotics design, programming, and implementation. Guided learners through theoretical concepts and practical applications using Arduino, 3D CAD, and various robotics platforms."
                    />
                    <Details
                        position="Program Lead - Manager"
                        company="STEMROBO Technologies"
                        companyLink="https://www.stemrobo.com/"
                        time="Oct 2023 - Dec 2023"
                        address="Mumbai, Maharashtra, India"
                        work="Led the Mumbai team in delivering innovative STEM education programs, managing curriculum development and team operations."
                    />
                    <Details
                        position="Sr. STEM Innovation Engineer"
                        company="STEMROBO Technologies"
                        companyLink="https://www.stemrobo.com/"
                        time="Jul 2022 - Oct 2023"
                        address="Mumbai, Maharashtra, India"
                        work="Developed and delivered engaging STEM curricula for K-12 students, teaching 3D design, electronics, C++/Python programming, and AI. Guided students in creating innovative projects and fostered interest in space exploration."
                    />
                    <Details
                        position="President"
                        company="NSS Mumbai"
                        companyLink="#"
                        time="Aug 2021 - Present"
                        address="Mumbai, Maharashtra, India"
                        work="Leading NSS Mumbai chapter to advance space accessibility and education. Building a community of space enthusiasts and providing opportunities for students to learn and work on space-related projects."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
