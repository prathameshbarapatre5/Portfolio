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
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-light/80 dark:bg-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-2xl bg-black border border-gray-700 shadow-lg flex items-center justify-center p-2.5 group-hover:border-primary/50 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all">
                        <img
                            src={`${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}/images/logo-photo.png`}
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="hidden sm:block font-bold text-lg text-dark dark:text-light">Prathmesh</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <CustomLink href="/" title="Home" />
                    <CustomLink href="/about" title="About" />
                    <CustomLink href="/projects" title="Projects" />
                    <CustomLink href="/publications" title="Publications" />
                    <CustomLink href="/articles" title="Articles" />
                </nav>

                {/* Social Links */}
                <div className="hidden md:flex items-center gap-4">
                    <motion.a
                        href="https://github.com/prathameshbarapatre5"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
                    >
                        <Github size={20} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/prathmesh-barapatre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
                    >
                        <Linkedin size={20} />
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-light dark:bg-dark"
                    >
                        <nav className="flex flex-col items-center py-6 gap-2">
                            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium my-3">Home</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium my-3">About</Link>
                            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium my-3">Projects</Link>
                            <Link href="/publications" onClick={() => setIsOpen(false)} className="text-lg font-medium my-3">Publications</Link>
                            <Link href="/articles" onClick={() => setIsOpen(false)} className="text-lg font-medium my-3">Articles</Link>

                            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 w-full justify-center">
                                <motion.a
                                    href="https://github.com/prathameshbarapatre5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileTap={{ scale: 0.95 }}
                                    className="text-dark dark:text-light"
                                >
                                    <Github size={24} />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/prathmesh-barapatre/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileTap={{ scale: 0.95 }}
                                    className="text-dark dark:text-light"
                                >
                                    <Linkedin size={24} />
                                </motion.a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
