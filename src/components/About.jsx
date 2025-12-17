import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Briefcase, Coffee, Globe } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" ref={ref} className="min-h-screen py-32 relative bg-[#050511] overflow-hidden">

            {/* Decorative text watermark */}
            <div className="absolute top-20 right-0 text-[200px] font-bold text-white/[0.02] pointer-events-none select-none overflow-hidden leading-none">
                ABOUT
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left: Image / Visual Composition */}
                <div className="relative">
                    <motion.div style={{ y }} className="relative z-10">
                        {/* Main Profile Image Container */}
                        <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <img
                                src="/img12.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />

                            {/* Floating Name Tag */}
                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="text-white font-bold text-2xl">Sano.</h3>
                                <p className="text-accent text-sm tracking-widest uppercase">Senior Engineer</p>
                            </div>
                        </div>

                        {/* Floating Stat Card 1 */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl hidden sm:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300"><Briefcase size={20} /></div>
                                <div>
                                    <div className="text-white font-bold">5+ Years</div>
                                    <div className="text-xs text-slate-400">Experience</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stat Card 2 */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-8 bottom-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl hidden sm:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg text-green-300"><Globe size={20} /></div>
                                <div>
                                    <div className="text-white font-bold">Remote</div>
                                    <div className="text-xs text-slate-400">Availability</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Background Blob behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
                </div>

                {/* Right: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Who I Am</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Undergraduate <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ICT Student.</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                        <p>
                            I am an undergraduate student at <strong className="text-white">Uva Wellassa University</strong>, pursuing a Bachelor’s degree in Information and Communication Technology.
                        </p>
                        <p>
                            Skilled in web development, DSA, and OOP, I am passionate about creating responsive, user-friendly applications using the MERN stack and modern design frameworks like Tailwind CSS.
                        </p>
                        <p className="text-sm text-slate-500">
                            Based in Watawala, Sri Lanka.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                        <div className="space-y-1">
                            <div className="text-3xl font-bold text-white">3.46</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Current GPA</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-bold text-white">3+</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Major Projects</div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a href="#contact" className="text-white underline decoration-accent decoration-2 underline-offset-8 hover:text-accent transition-colors font-medium">Read more about my journey</a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
