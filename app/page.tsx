"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

const skills = [
    "🤖 Robotics", "⚡ Electrical Engineering", "💻 Computer Science", 
    "⚙️ Mechanical Engineering", "🚀 Space Technology", "🧠 AI/ML", 
    "🎯 Control Systems", "🔬 Research", "🛰️ Autonomous Systems",
    "📡 ROS/ROS2", "🌙 Lunar Exploration", "⚙️ Mechatronics"
];

export default function Home() {
    return (
        <div className="min-h-screen">
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-white leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Prathmesh Barapatre
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-3xl mx-auto">
                        Robotics Engineer • Space Enthusiast • Innovation Leader
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        <Link
                            href="https://drive.google.com/file/d/1SY4Z-OTDV3ZloRIsB4e7uzu-EGRddMaF/view?usp=sharing"
                            target="_blank"
                            className="group glass px-8 py-4 rounded-full font-semibold flex items-center gap-2 neon-border hover:bg-white/5 transition-all"
                        >
                            <Download size={20} />
                            Resume
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/projects"
                            className="px-8 py-4 rounded-full font-semibold bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
                        >
                            View Work
                        </Link>
                    </div>
                </motion.div>

                <div className="w-full overflow-hidden mt-12">
                    <div className="flex animate-marquee gap-8">
                        {[...skills, ...skills].map((skill, i) => (
                            <div
                                key={i}
                                className="glass px-6 py-3 rounded-full text-secondary font-semibold whitespace-nowrap neon-border hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex-shrink-0"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "5+", label: "Years Experience" },
                            { value: "20+", label: "Projects" },
                            { value: "6+", label: "Publications" },
                            { value: "500+", label: "Students Mentored" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-2xl text-center neon-border hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
                            >
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-secondary">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
