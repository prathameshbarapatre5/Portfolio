"use client";

import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter, Sun, Moon } from "lucide-react";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'} dark:bg-light`}>
                &nbsp;
            </span>
        </Link>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/articles" title="Articles" className="ml-4" />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://twitter.com" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <Twitter />
                    </motion.a>
                    <motion.a href="https://github.com" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <Github />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/prathmesh-barapatre/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3"
                    >
                        <Linkedin />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex item-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {
                            mode === "dark" ?
                                <Sun className={"fill-dark"} />
                                : <Moon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
