"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const CustomLink = ({ href, title }: { href: string; title: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={`relative text-sm font-medium tracking-wide uppercase transition-colors ${
                isActive ? 'text-primary' : 'text-secondary hover:text-light'
            }`}
        >
            {title}
            {isActive && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </Link>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
            <div className="glass backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/50">
                            PB
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <CustomLink href="/" title="Home" />
                        <CustomLink href="/about" title="About" />
                        <CustomLink href="/projects" title="Projects" />
                        <CustomLink href="/publications" title="Publications" />
                        <CustomLink href="/articles" title="Articles" />
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <motion.a
                            href="https://github.com/prathameshbarapatre5"
                            target="_blank"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-secondary hover:text-primary transition-colors"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/prathmesh-barapatre/"
                            target="_blank"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-secondary hover:text-primary transition-colors"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg glass-hover transition-all"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-white/10 glass"
                        >
                            <nav className="flex flex-col items-center py-6 gap-4">
                                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-secondary hover:text-primary transition-colors">Home</Link>
                                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-secondary hover:text-primary transition-colors">About</Link>
                                <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-secondary hover:text-primary transition-colors">Projects</Link>
                                <Link href="/publications" onClick={() => setIsOpen(false)} className="text-lg font-medium text-secondary hover:text-primary transition-colors">Publications</Link>
                                <Link href="/articles" onClick={() => setIsOpen(false)} className="text-lg font-medium text-secondary hover:text-primary transition-colors">Articles</Link>
                                
                                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
                                    <a href="https://github.com/prathameshbarapatre5" target="_blank">
                                        <Github size={24} className="text-secondary hover:text-primary transition-colors" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/prathmesh-barapatre/" target="_blank">
                                        <Linkedin size={24} className="text-secondary hover:text-primary transition-colors" />
                                    </a>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
