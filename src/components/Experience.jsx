import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const experiences = [
        {
            id: 1,
            role: "Information & Communication Technology",
            company: "Uva Wellassa University",
            period: "2023 - Present",
            description: "Undergraduate pursuing a Bachelor's degree (GPA: 3.46). Focusing on Full-Stack Development, Data Structures, and OOP.",
            tags: ["Undergraduate", "ICT", "MERN"]
        },
        {
            id: 2,
            role: "Independent Developer",
            company: "Self-Employed",
            period: "2024 - Present",
            description: "Focusing on academic and independent development projects demonstrating strong practical experience in modern web development.",
            tags: ["Full Stack", "Projects", "React"]
        },
        {
            id: 3,
            role: "G.C.E. Advanced Level",
            company: "Highlands National College",
            period: "2019 - 2022",
            description: "Completed A/Ls in E-Tech Stream with District Rank 13. Achieved 'A' in Software Technology and 'B' in ICT.",
            tags: ["E-Tech", "Software", "ICT"]
        }
    ];
    return (
        <section id="experience" ref={ref} className="section bg-[#050511] relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm">Career Path</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3 text-white">Professional Journey</h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

                    {/* Animated Progress Line */}
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-purple-500 -translate-x-1/2 origin-top"
                    ></motion.div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-[#050511] border-2 border-accent flex items-center justify-center z-20 hover:scale-125 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                    <Briefcase size={16} className="text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2">
                                    <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/[0.07] transition-all group backdrop-blur-sm ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:items-end'
                                        }`}>
                                        <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'
                                            }`}>
                                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{exp.company}</h3>
                                            <div className="text-lg text-purple-200 font-medium">{exp.role}</div>
                                            <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                                                <Calendar size={14} />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <p className="text-slate-400 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'
                                            }`}>
                                            {exp.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium text-accent border border-accent/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Spacer for alternating layout */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
