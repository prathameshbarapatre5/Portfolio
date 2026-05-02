"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, Mail } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Home() {
    return (
        <main className='flex items-center min-h-screen w-full'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Text Content */}
                    <motion.div variants={itemVariants} className='flex flex-col space-y-6 order-2 lg:order-1'>
                        <div className="inline-block">
                            <span className="px-4 py-2 glass rounded-full text-sm font-medium border border-white/20">
                                Robotics Engineer
                            </span>
                        </div>

                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                                Building the Future
                            </span>
                            <br />
                            <span className="text-white/80">
                                With Robotics
                            </span>
                        </h1>

                        <p className='text-lg text-white/60 leading-relaxed max-w-2xl'>
                            As a Robotics Engineer and President of NSS Mumbai, I explore advanced technologies for space exploration and automation. From designing mechanisms to mentoring students, I push the boundaries of innovation.
                        </p>

                        <div className='flex flex-wrap items-center gap-4 pt-4'>
                            <Link
                                href="https://drive.google.com/file/d/1SY4Z-OTDV3ZloRIsB4e7uzu-EGRddMaF/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                <Download size={20} />
                                Resume
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="mailto:barapatre.p@northeastern.edu"
                                className="inline-flex items-center gap-2 glass border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                <Mail size={20} />
                                Contact
                            </Link>
                        </div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
                        >
                            <div>
                                <div className="text-3xl font-bold text-white">5+</div>
                                <div className="text-sm text-secondary mt-1">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">20+</div>
                                <div className="text-sm text-secondary mt-1">Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">500+</div>
                                <div className="text-sm text-secondary mt-1">Students Mentored</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        variants={itemVariants}
                        className='order-1 lg:order-2 flex justify-center lg:justify-end'
                    >
                        <div className="relative max-w-md w-full">
                            <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-2xl"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
                                <img
                                    src="/Portfolio/images/home-photo.jpg"
                                    alt="Prathmesh Barapatre"
                                    className="w-full h-auto"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div class="w-full aspect-[5/6] bg-white/5 flex items-center justify-center text-8xl">🚀</div>';
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}
