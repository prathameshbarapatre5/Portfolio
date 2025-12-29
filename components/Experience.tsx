"use client";
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon' // need to create this

const Details = ({ position, company, companyLink, time, address, work }: any) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-start md:w-[80%]'>
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
                        position="Chapter Assembly Chair"
                        company="National Space Society"
                        companyLink="https://nss.org"
                        time="Aug 2023 - Present"
                        address="United States"
                        work={
                            <div className='flex flex-col gap-2'>
                                <p>Chair for the Chapter Assembly at National Space Society</p>
                                <span><strong className='font-bold'>Skills:</strong> Team Management • Management</span>
                            </div>
                        }
                    />
                    <Details
                        position="Chapter Assembly Executive Secretary"
                        company="National Space Society"
                        companyLink="https://nss.org"
                        time="Jun 2022 - Aug 2023"
                        address="United States"
                        work="Chapter Assembly Executive Secretary at National Space Society, USA"
                    />
                    <Details
                        position="Robotics Engineer"
                        company="JBCN International Schools"
                        companyLink="#"
                        time="Jan 2024 - Apr 2024"
                        address="Borivali, Maharashtra, India"
                        work={
                            <div className='flex flex-col gap-2'>
                                <p>As a Robotics Engineer working as a Teacher/Instructor, my role involves mentoring learners in various aspects of robotics, encompassing design, programming, and implementation of robotic systems. I guide students through both theoretical concepts and practical applications, aiming to foster their creativity, problem-solving skills, and a profound understanding of robotics principles. Ultimately, my goal is to inspire and empower the next generation of robotics enthusiasts and professionals.</p>
                                <span><strong className='font-bold'>Skills:</strong> 3D Computer Aided Design (3D CAD) • Arduino IDE</span>
                            </div>
                        }
                    />
                    <Details
                        position="Program Lead - Manager"
                        company="STEMROBO Technologies"
                        companyLink="https://www.stemrobo.com/"
                        time="Oct 2023 - Dec 2023"
                        address="Mumbai, Maharashtra, India"
                        work={
                            <div className='flex flex-col gap-2'>
                                <p>Leading Mumbai Team as Program Lead and Manager</p>
                                <span><strong className='font-bold'>Skills:</strong> Creative Problem Solving</span>
                            </div>
                        }
                    />
                    <Details
                        position="Sr. STEM Innovation Engineer"
                        company="STEMROBO Technologies"
                        companyLink="https://www.stemrobo.com/"
                        time="Jul 2022 - Oct 2023"
                        address="Mumbai, Maharashtra, India"
                        work={
                            <div className='flex flex-col gap-2'>
                                <p>As a STEM Innovation Engineer, I ignited young minds (K-12) at a prestigious Mumbai school, a top client for the company. Through engaging curriculums and kit-based learning, I empowered students to grasp complex concepts like 3D design, electronics, C++/Python coding, and AI. Witnessing their creativity blossom while crafting their own projects fueled my passion for space exploration. I also nurtured the budding space enthusiasts among them, guiding them to develop projects that soared beyond their classrooms and into the cosmos.</p>
                                <span><strong className='font-bold'>Skills:</strong> Problem Solving • Creative Problem Solving</span>
                            </div>
                        }
                    />
                    <Details
                        position="President"
                        company="National Space Society (USA) - Mumbai"
                        companyLink="#"
                        time="Aug 2021 - Present"
                        address="Mumbai, Maharashtra, India"
                        work={
                            <div className='flex flex-col gap-2'>
                                <p>As President my role is to bring like minded people together and work towards making space accessible to everyone and guide students in right direction while providing opportunities to work and learn about space.</p>
                                <span><strong className='font-bold'>Skills:</strong> Creative Problem Solving</span>
                            </div>
                        }
                    />
                    <Details
                        position="Secretary"
                        company="National Space Society (USA) - Mumbai"
                        companyLink="#"
                        time="Nov 2020 - Aug 2021"
                        address="Mumbai, Maharashtra, India"
                        work={
                            <div className='flex flex-col gap-2'>
                                <p>Promoted to Secretary of NSS - Mumbai where I have leaded Core Team in launching Cosmic web magazine and conducting various webinar as well as hosted a webinar and conducted interview to hire Interns.</p>
                            </div>
                        }
                    />
                    <Details
                        position="Operations Manager"
                        company="National Space Society (USA) - Mumbai"
                        companyLink="#"
                        time="Sep 2020 - Nov 2020"
                        address="Mumbai, Maharashtra, India"
                        work="Started working with NSS - Mumbai as Operation Manager to lead Operations team to execute different activities such as webinars and workshops"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
