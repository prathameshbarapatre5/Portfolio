"use client";

import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
    const skillCategories = [
        {
            title: "Robotics & Mechatronics",
            skills: ["Robotics", "Mechatronics", "ROS/ROS2", "Control Systems", "Mobile Robotics", "Sensor Fusion"]
        },
        {
            title: "Programming",
            skills: ["Python", "C++", "MATLAB", "Simulink", "Arduino", "ESP32", "Raspberry Pi"]
        },
        {
            title: "Design & CAD",
            skills: ["SolidWorks", "Fusion 360", "3D Printing", "Prototyping", "CFD"]
        },
        {
            title: "AI & Machine Learning",
            skills: ["Deep Learning", "Neural Networks", "CNN", "Computer Vision"]
        },
        {
            title: "Space Technology",
            skills: ["Space Systems", "Satellite Tech", "Mission Planning", "Lunar Exploration"]
        },
        {
            title: "Leadership & Teaching",
            skills: ["Research", "Teaching", "Team Management", "Public Speaking"]
        }
    ];

    const experience = [
        {
            role: "Chapter Assembly Chair",
            org: "National Space Society",
            period: "Aug 2023 - Present",
            location: "United States",
            description: "Leading Chapter Assembly coordination across global NSS chapters to advance space exploration advocacy and education."
        },
        {
            role: "President",
            org: "NSS Mumbai",
            period: "Aug 2021 - Present",
            location: "Mumbai, India",
            description: "Building space community, providing opportunities for students to learn and work on space-related projects."
        },
        {
            role: "Robotics Engineer",
            org: "JBCN International Schools",
            period: "Jan 2024 - Apr 2024",
            location: "Mumbai, India",
            description: "Mentored students in robotics design, programming, and implementation using Arduino, 3D CAD, and various platforms."
        },
        {
            role: "Sr. STEM Innovation Engineer",
            org: "STEMROBO Technologies",
            period: "Jul 2022 - Oct 2023",
            location: "Mumbai, India",
            description: "Developed STEM curricula for K-12 students, teaching 3D design, electronics, C++/Python, and AI."
        }
    ];

    const education = [
        {
            degree: "Master of Science in Robotics Engineering",
            school: "Northeastern University",
            period: "Jan 2025 - 2026",
            details: "Courses: Deep Learning, Robot Sensing & Navigation, Robot Mechanics & Control, Mobile Robotics"
        },
        {
            degree: "Space Studies Program",
            school: "International Space University",
            period: "Jun 2024 - Aug 2024",
            details: "Intensive program at Rice University with NASA JSC. Completed 55+ courses in space science, engineering, and business."
        },
        {
            degree: "Bachelor of Engineering - Mechatronics",
            school: "Terna Engineering College",
            period: "2018 - 2021",
            details: "Comprehensive program in robotics, automation systems, and mechatronics design."
        }
    ];

    return (
        <main className='min-h-screen py-32'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center mb-20'
                >
                    <h1 className='text-5xl lg:text-7xl font-black mb-4 text-white'>
                        About <span className='drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Me</span>
                    </h1>
                    <p className='text-xl text-white/50 max-w-2xl mx-auto'>
                        Passion fuels purpose
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32'
                >
                    <motion.div variants={itemVariants} className='space-y-6'>
                        <h2 className='text-3xl font-bold text-white mb-6'>Biography</h2>
                        <div className='space-y-4 text-white/60 text-lg leading-relaxed'>
                            <p>
                                Hi, I'm <strong className='text-white'>Prathmesh Barapatre</strong>, a Robotics Engineer and Space Enthusiast 
                                with a passion for creating functional, futuristic, and innovative technological solutions.
                            </p>
                            <p>
                                With years of experience in mechatronics and leadership roles at the National Space Society, 
                                I believe that engineering is about more than just building things—it's about solving problems 
                                and creating solutions that advance human exploration.
                            </p>
                            <p>
                                Whether I'm designing autonomous navigation systems, planning space missions, or mentoring 
                                the next generation of engineers, I bring commitment to excellence and innovation to every 
                                project I work on.
                            </p>
                        </div>

                        <div className='grid grid-cols-2 gap-4 pt-8'>
                            {[
                                { value: "5+", label: "Years Experience" },
                                { value: "20+", label: "Projects" },
                                { value: "6+", label: "Publications" },
                                { value: "500+", label: "Students Mentored" }
                            ].map((stat, i) => (
                                <div key={i} className='glass p-4 rounded-xl neon-border text-center hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all'>
                                    <div className='text-2xl font-bold text-white'>{stat.value}</div>
                                    <div className='text-sm text-secondary mt-1'>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className='flex items-center justify-center'>
                        <div className="relative max-w-md w-full">
                            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl"></div>
                            <div className='relative glass p-2 rounded-3xl neon-border overflow-hidden'>
                                <img
                                    src="/Portfolio/images/about-photo.jpeg"
                                    alt="Prathmesh Barapatre"
                                    className='w-full h-auto rounded-2xl'
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div class="w-full aspect-square flex items-center justify-center text-9xl">👨‍🚀</div>';
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mb-32'
                >
                    <h2 className='text-4xl font-bold text-center mb-12 text-white'>
                        Technical <span className='drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Expertise</span>
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {skillCategories.map((category, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className='glass p-6 rounded-2xl neon-border hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all'
                            >
                                <h3 className='text-xl font-bold text-white mb-4'>{category.title}</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {category.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className='px-3 py-1.5 bg-white/5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-default border border-white/10'
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mb-32'
                >
                    <h2 className='text-4xl font-bold text-center mb-12 text-white'>
                        Professional <span className='drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Journey</span>
                    </h2>

                    <div className='space-y-6 max-w-4xl mx-auto'>
                        {experience.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className='glass p-6 rounded-2xl neon-border hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all relative pl-12'
                            >
                                <div className='absolute left-6 top-6 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]'></div>
                                <h3 className='text-xl font-bold text-white mb-1'>{item.role}</h3>
                                <div className='text-white/80 font-semibold mb-2'>{item.org}</div>
                                <div className='text-sm text-secondary mb-3'>{item.period} | {item.location}</div>
                                <p className='text-white/60'>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-4xl font-bold text-center mb-12 text-white'>
                        <span className='drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Education</span>
                    </h2>

                    <div className='space-y-6 max-w-4xl mx-auto'>
                        {education.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className='glass p-6 rounded-2xl neon-border hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all relative pl-12'
                            >
                                <div className='absolute left-6 top-6 w-2 h-2 bg-white/70 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]'></div>
                                <h3 className='text-xl font-bold text-white mb-1'>{item.degree}</h3>
                                <div className='text-white/80 font-semibold mb-2'>{item.school}</div>
                                <div className='text-sm text-secondary mb-3'>{item.period}</div>
                                <p className='text-white/60 text-sm'>{item.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Honors & Awards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-32'
                >
                    <h2 className='text-4xl font-bold text-center mb-4 text-white'>
                        Honors & <span className='drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Awards</span>
                    </h2>
                    <p className='text-center text-white/40 mb-12'>Recognition across space, engineering, and leadership</p>

                    {/* Featured */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                        {[
                            {
                                title: "NSS 30 Under 30",
                                subtitle: "Inaugural Class of 2026",
                                issuer: "National Space Society",
                                date: "Oct 2026",
                                link: "https://nss.org/meet-the-inaugural-nss-30-under-30-class-of-2026/"
                            },
                            {
                                title: "Claire McMurry Chapter Advocate of the Year",
                                subtitle: "ISDC 2025",
                                issuer: "National Space Society",
                                date: "Jun 2025",
                                link: null
                            },
                            {
                                title: "Dave Dunlop International Chapter Award",
                                subtitle: "ISDC 2025",
                                issuer: "National Space Society",
                                date: "Jun 2025",
                                link: null
                            }
                        ].map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className='glass p-6 rounded-2xl neon-border hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all text-center'
                            >
                                <div className='text-3xl mb-3'>🏆</div>
                                <h3 className='text-lg font-bold text-white mb-1'>{award.title}</h3>
                                <div className='text-sm text-white/50 mb-3'>{award.subtitle}</div>
                                <div className='text-xs text-white/40 mb-1'>{award.issuer}</div>
                                <div className='text-xs text-secondary'>{award.date}</div>
                                {award.link && (
                                    <a
                                        href={award.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='mt-4 inline-flex items-center gap-1 text-xs text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg transition-all'
                                    >
                                        View ↗
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Competition & Academic */}
                    <div className='space-y-3 max-w-4xl mx-auto'>
                        {[
                            { title: "Excellence Chapter Award", issuer: "National Space Society", date: "May 2024", badge: "🥇" },
                            { title: "Special Merit Outstanding International Chapter Award", issuer: "National Space Society", date: "May 2023", badge: "🥇" },
                            { title: "3rd Place — Electrifying Transportation", issuer: "IIT Bombay Techfest", date: "Feb 2022", badge: "🥉" },
                            { title: "5th Place (Top 22) — Start-a-thon 3.0", issuer: "SP-TBI", date: "Mar 2022", badge: "🎖️" },
                            { title: "2nd Place — AVALON National Level Project Competition", issuer: "Terna Engineering College / L&T", date: "Mar 2018", badge: "🥈" }
                        ].map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className='glass px-6 py-4 rounded-xl neon-border hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all flex items-center gap-4'
                            >
                                <span className='text-xl flex-shrink-0'>{award.badge}</span>
                                <div className='flex-1 min-w-0'>
                                    <div className='text-white font-semibold text-sm'>{award.title}</div>
                                    <div className='text-white/40 text-xs mt-0.5'>{award.issuer}</div>
                                </div>
                                <div className='text-xs text-secondary flex-shrink-0'>{award.date}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </main>
    )
}

export default About
