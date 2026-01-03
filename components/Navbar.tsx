"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Github, Linkedin, Sun, Moon, Menu, X } from "lucide-react";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const CustomLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${className} relative group text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary dark:hover:text-primaryDark`}>
            {title}
            <span className={`h-0.5 inline-block bg-primary dark:bg-primaryDark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    );
};

const MobileLink = ({ href, title, toggle }: { href: string; title: string; toggle: () => void }) => {
    const pathname = usePathname();

    const handleClick = () => {
        toggle();
    };

    return (
        <Link
            href={href}
            className={`${pathname === href ? 'text-primary dark:text-primaryDark' : 'text-dark dark:text-light'} text-lg font-medium my-3 relative group`}
            onClick={handleClick}
        >
            {title}
        </Link>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-light/80 dark:bg-dark/80 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <CustomLink href="/" title="Home" />
                    <CustomLink href="/about" title="About" />
                    <CustomLink href="/projects" title="Projects" />
                    <CustomLink href="/publications" title="Publications" />
                    <CustomLink href="/articles" title="Articles" />
                </nav>

                {/* Social Links & Theme Switcher */}
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

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={handleClick}
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
                            <MobileLink href="/" title="Home" toggle={handleClick} />
                            <MobileLink href="/about" title="About" toggle={handleClick} />
                            <MobileLink href="/projects" title="Projects" toggle={handleClick} />
                            <MobileLink href="/publications" title="Publications" toggle={handleClick} />
                            <MobileLink href="/articles" title="Articles" toggle={handleClick} />

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
                                <button
                                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {mode === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
