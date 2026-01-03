"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <MotionLink
            href="/"
            className='flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition-shadow'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            PB
        </MotionLink>
    )
}

export default Logo;
