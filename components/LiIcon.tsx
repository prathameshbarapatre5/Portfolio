"use client";
import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }: any) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })

    return (
        <figure className='absolute left-0'>
            <svg className='-rotate-90' width="40" height="40" viewBox='0 0 100 100'>
                <circle cx="50" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-[3px] fill-none' />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="20"
                    className='stroke-[6px] fill-white dark:fill-dark stroke-primary dark:stroke-primaryDark'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="50" cy="50" r="8" className='fill-primary dark:fill-primaryDark' />
            </svg>
        </figure>
    )
}

export default LiIcon
