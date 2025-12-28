"use client";
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon' // need to create this

const Details = ({ position, company, companyLink, time, address, work }: any) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="President"
                        company="National Space Society Mumbai Chapter"
                        companyLink="https://nss.org"
                        time="2020-Present"
                        address="Mumbai, India"
                        work="Leading the chapter to promote space exploration and settlement. Organizing webinars, events, and outreach programs to engage the public and students."
                    />
                    <Details
                        position="NSS Space Ambassador"
                        company="National Space Society"
                        companyLink="https://nss.org"
                        time="2020-Present"
                        address="Global"
                        work="Representing NSS and advocating for space initiatives. Delivering talks and presentations on space topics like Space Solar Power and LEO Stations."
                    />
                    <Details
                        position="Robotics Mentor"
                        company="International Organization of Aspiring Astronauts"
                        companyLink="#"
                        time="2018-2020"
                        address="Remote"
                        work="Mentored over 500 students in robotics, guiding them through projects and competitions. Focused on K12 education."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
