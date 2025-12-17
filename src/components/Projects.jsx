import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Job Portal & Builder",
        category: "Full Stack Application",
        description: "Developed a comprehensive Job Portal and Resume Builder using the MERN stack. Integrated Stripe checkout for payments and Firebase authentication for secure user management.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
        stack: ["MERN Stack", "Tailwind CSS", "Stripe", "Firebase"],
        links: { live: "#", repo: "https://github.com/hameethasanofer/Independent-Project-Job-Niche.git" }
    },
    {
        id: 2,
        title: "Pet Web Application",
        category: "React Frontend",
        description: "Created a responsive Pet Web Application focusing on modern UI design, smooth user experience, and mobile-friendly layouts.",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
        stack: ["React", "Tailwind CSS", "UX Design"],
        links: { live: "#", repo: "https://github.com/hameethasanofer/ratheesana.git" }
    },
    {
        id: 3,
        title: "Mini E-Commerce",
        category: "MERN Stack",
        description: "Developed a functional e-commerce platform with dynamic product listings, user interactions, and a responsive shopping experience.",
        image: "https://picsum.photos/id/1/1600/900",
        stack: ["MERN Stack", "Tailwind CSS", "REST API"],
        links: { live: "#", repo: "https://github.com/hameethasanofer/mini-ecommerce.git" }
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div ref={ref} className="group relative min-h-[500px] grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-24 last:mb-0">

            {/* Image Side (Parallax) */}
            <div className={`relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute inset-0 bg-accent/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>
            </div>

            {/* Content Side */}
            <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''} relative z-20`}>
                <div className="text-accent font-mono text-sm tracking-widest mb-4">0{index + 1} / {project.category}</div>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className={`flex flex-wrap gap-3 mb-10 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    {project.stack.map(tech => (
                        <span key={tech} className="px-4 py-1.5 rounded-full border border-white/10 text-slate-300 text-xs uppercase tracking-wider backdrop-blur-md">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className={`flex items-center gap-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold hover:text-accent transition-colors text-lg">
                        View Case Study <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" /> Code
                    </a>
                </div>
            </div>
        </div>

    );
};

const Projects = () => {
    return (
        <section id="projects" className="section bg-[#050511] relative overflow-hidden">
            {/* Background Noise/Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="mb-24 max-w-2xl">
                    <h2 className="text-accent tracking-widest uppercase text-sm font-semibold mb-2">Selected Works</h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white">
                        Featured <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Case Studies.</span>
                    </h3>
                </div>

                <div>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View More Link */}
                <div className="text-center mt-20">
                    <a href="https://github.com" className="inline-flex items-center gap-2 text-white border-b border-accent pb-1 hover:text-accent transition-colors">
                        View Entire Archive <ArrowUpRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
