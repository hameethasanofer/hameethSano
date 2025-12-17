import React from 'react';
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#02020a] pt-32 pb-10 border-t border-white/5 relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <a href="#" className="inline-block text-3xl font-bold text-white tracking-tight">Sano.</a>
                        <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
                            A senior full-stack engineer focused on building digital products that are accessible, performant, and delightful to use.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><Github size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Sitemap</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#about" className="hover:text-accent transition-colors">About Me</a></li>
                            <li><a href="#skills" className="hover:text-accent transition-colors">Expertise</a></li>
                            <li><a href="#projects" className="hover:text-accent transition-colors">Selected Work</a></li>
                            <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Socials</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">LinkedIn <ArrowUpRight size={14} /></a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">GitHub <ArrowUpRight size={14} /></a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">Twitter <ArrowUpRight size={14} /></a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">Instagram <ArrowUpRight size={14} /></a></li>
                        </ul>
                    </div>

                </div>

                {/* Big Text Bottom */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Hameetha Sanofer. Designed & Built with MERN Stack.
                    </div>
                    <div className="text-slate-500 text-sm flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

                <div className="mt-20">
                    <h1 className="text-[12vw] leading-none font-bold text-white/5 text-center pointer-events-none select-none">
                        HAMEETHA
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
