import React, { useState } from 'react';
import { Layout, Database, Terminal, Cpu, Globe, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            id: 0,
            title: "Frontend Development",
            icon: <Layout className="w-5 h-5" />,
            description: "Building responsive, modern user interfaces.",
            skills: [
                { name: "React.js", level: 90, color: "bg-blue-500" },
                { name: "Tailwind CSS", level: 95, color: "bg-cyan-400" },
                { name: "HTML / CSS", level: 98, color: "bg-orange-500" },
                { name: "JavaScript", level: 85, color: "bg-yellow-400" }
            ]
        },
        {
            id: 1,
            title: "Backend Development",
            icon: <Database className="w-5 h-5" />,
            description: "Creating robust server-side applications.",
            skills: [
                { name: "Node.js", level: 80, color: "bg-green-500" },
                { name: "Express.js", level: 85, color: "bg-gray-400" },
                { name: "MongoDB", level: 80, color: "bg-green-600" }
            ]
        },
        {
            id: 2,
            title: "Tools & Design",
            icon: <Terminal className="w-5 h-5" />,
            description: "Graphic design, payments, and deployment.",
            skills: [
                { name: "Firebase", level: 85, color: "bg-yellow-500" },
                { name: "Stripe Integ.", level: 75, color: "bg-indigo-500" },
                { name: "Graphic Design", level: 80, color: "bg-pink-500" },
                { name: "Full-Stack Dev", level: 85, color: "bg-blue-600" }
            ]
        }
    ];

    return (
        <section id="skills" className="section bg-[#050511] relative border-t border-white/5">
            <div className="container-custom">

                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

                    {/* Left: Navigation / Tabs */}
                    <div className="md:w-1/3 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-accent tracking-widest uppercase text-sm font-semibold mb-2">My Toolkit</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical <br />Expertise</h3>
                            <p className="text-slate-400 leading-relaxed max-w-sm">
                                I strictly prefer tools that prioritize developer experience and end-user performance. Here is my primary stack.
                            </p>
                        </motion.div>

                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${activeTab === cat.id
                                        ? 'bg-white/10 border-accent/50 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                                        : 'bg-transparent border-transparent text-slate-500 hover:bg-white/5 hover:text-slate-200'
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg ${activeTab === cat.id ? 'bg-accent text-white' : 'bg-white/5'}`}>
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <span className="block font-bold text-lg">{cat.title}</span>
                                        <span className="text-xs opacity-60 hidden sm:block">Explore Skills</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dynamic Content Area */}
                    <div className="md:w-2/3 min-h-[500px] relative">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 h-full backdrop-blur-sm"
                            >
                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-2 text-accent">
                                        {categories[activeTab].icon}
                                        <span className="uppercase tracking-wider text-sm font-bold">Focus Area</span>
                                    </div>
                                    <h4 className="text-3xl font-bold text-white mb-2">{categories[activeTab].title}</h4>
                                    <p className="text-slate-400 text-lg">{categories[activeTab].description}</p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {categories[activeTab].skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group"
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white font-medium group-hover:text-accent transition-colors">{skill.name}</span>
                                                <span className="text-slate-500 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                    className={`h-full rounded-full ${skill.color}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Background Decoration */}
                                <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
