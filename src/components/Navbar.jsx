import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Expertise', href: '#skills' },
        { name: 'Work', href: '#projects' },
        { name: 'Process', href: '#experience' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-[#050511]/80 backdrop-blur-md border-white/5 py-4'
                    : 'bg-transparent border-transparent py-6'
                    }`}
            >
                <div className="container-custom flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="relative z-50 flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                            H
                        </div>
                        <span className="font-bold text-xl text-white tracking-tight hidden sm:block">Sanofer</span>
                    </a>

                    {/* Desktop Nav - Centered */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm uppercase tracking-widest font-medium text-slate-400 hover:text-white transition-colors py-2 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Right Action */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* <a href="mailto:hello@sano.dev" className="text-sm font-medium text-white hover:text-accent transition-colors">hello@sano.dev</a> */}
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-accent hover:text-white transition-colors"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-accent flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    href={link.href}
                                    className="text-5xl font-bold text-white hover:text-black transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-10 text-white/60 text-sm uppercase tracking-widest"
                        >
                            Sano Portfolio 2024
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
