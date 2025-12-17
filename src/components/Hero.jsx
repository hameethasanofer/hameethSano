import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, PenTool, Zap, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-[#050511]">

            {/* 1. Dynamic Aurora Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[120px] animate-[pulse_8s_infinite]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-indigo-500/20 rounded-full blur-[100px] animate-[pulse_10s_infinite_reverse]" />
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-cyan-500/20 rounded-full blur-[100px] animate-blob" />
            </div>

            {/* 2. Noise Texture Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-accent"></span>
                            <span className="text-accent font-medium tracking-widest uppercase text-sm">Creative Technologist</span>
                        </div>
 
                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                            Building<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Clean code</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-lg leading-relaxed mb-8">
                            I am <span className="text-white font-medium">Hameetha Sanofer</span>, an ICT Undergraduate passionate about building responsive, user-friendly applications with the MERN stack.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Explore Work <ArrowRight size={18} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Creative Visual Composition */}
                <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px]">

                    {/* Floating "Bento" Grid Composition */}
                    <motion.div style={{ y: y1 }} className="relative z-20 w-80 h-96">

                        {/* Card 1: Main Code Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                            animate={{ opacity: 1, scale: 1, rotate: -6 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute top-0 left-0 w-64 h-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl z-10 transform-gpu hover:rotate-0 transition-transform duration-500 hover:scale-105"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400"><Code size={28} /></div>
                                <div className="text-xs font-mono text-slate-500">Main.tsx</div>
                            </div>
                            <div className="space-y-3 font-mono text-sm text-slate-300">
                                <div className="flex gap-2"><span className="text-purple-400">const</span> Create = () ={'&gt;'} {'{'}</div>
                                <div className="pl-4 text-slate-400">// Visual Magic</div>
                                <div className="pl-4"><span className="text-blue-400">immersive</span>: <span className="text-green-400">true</span>,</div>
                                <div className="pl-4"><span className="text-blue-400">impact</span>: <span className="text-green-400">'Maximum'</span></div>
                                <div>{'}'}</div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ['0%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    className="h-full bg-blue-500"
                                />
                            </div>
                        </motion.div>

                        {/* Card 2: Design Card (Offset) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: 20 }}
                            animate={{ opacity: 1, x: 50, y: 60 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute top-10 right-[-40px] w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/10 rounded-3xl p-5 shadow-xl hover:scale-110 transition-transform duration-300"
                        >
                            <div className="p-2 bg-pink-500/20 w-fit rounded-xl text-pink-400 mb-3"><PenTool size={24} /></div>
                            <h3 className="text-white font-bold text-lg mb-1">UI/UX</h3>
                            <p className="text-xs text-slate-400">Pixel perfect precision & smooth interaction.</p>
                        </motion.div>

                        {/* Card 3: Performance (Floating Top Right) */}
                        <motion.div
                            style={{ y: y2 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: -40 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute top-[-60px] right-[-20px] w-40 h-auto bg-[#0f172a] border border-white/10 rounded-2xl p-4 shadow-xl z-20 flex items-center gap-3"
                        >
                            <div className="p-2 bg-green-500/20 rounded-full text-green-400"><Zap size={18} /></div>
                            <div>
                                <div className="text-white font-bold text-sm">100/100</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Performance</div>
                            </div>
                        </motion.div>

                        {/* Decorative Circle */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
