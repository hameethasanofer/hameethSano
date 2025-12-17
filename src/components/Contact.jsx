import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Send } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [formStatus, setFormStatus] = useState('idle');

    const handleCopy = () => {
        navigator.clipboard.writeText("hameethasanofer610@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            alert("Message sent! (Demo)");
            setFormStatus('idle');
        }, 1500);
    };

    return (
        <section id="contact" className="section relative bg-[#050511] overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-accent/10 to-transparent pointer-events-none"></div>

            <div className="container-custom relative z-10 pt-20">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/10 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8">
                            Let's start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Project.</span>
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Available for new opportunities in Web Development. Based in Sri Lanka, working globally.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-auto"
                    >
                        <button
                            onClick={handleCopy}
                            className="group relative w-full md:w-auto flex items-center justify-between gap-6 px-8 py-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all active:scale-95"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent/20 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm text-slate-400">Email Me</div>
                                    <div className="text-xl font-bold text-white font-mono text-sm md:text-xl">hameethasanofer610@gmail.com</div>
                                </div>
                            </div>
                            <div className="text-slate-500 group-hover:text-white transition-colors">
                                {copied ? <Check size={24} /> : <Copy size={24} />}
                            </div>
                        </button>
                    </motion.div>
                </div>

                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-20">

                    {/* Socials & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <h4 className="text-slate-500 uppercase tracking-widest text-sm mb-6">Socials</h4>
                            <div className="flex flex-col gap-4 items-start">
                                <a href="http://linkedin.com/in/hameetha-sanofer-97812135a" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-accent transition-colors group">
                                    LinkedIn <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a href="https://github.com/hameethasanofer" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-accent transition-colors group">
                                    GitHub <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-slate-500 uppercase tracking-widest text-sm mb-6">Contact Info</h4>
                            <p className="text-xl text-white">Watawala, Sri Lanka</p>
                            <p className="text-xl text-white mt-2">070 310 1014</p>
                            <div className="mt-4 text-slate-400">Current Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                        </div>
                    </motion.div>

                    {/* Minimal Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="relative group">
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="What's your name?"
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="What's your email?"
                                />
                            </div>
                            <div className="relative group">
                                <textarea
                                    rows="3"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-accent hover:text-white transition-all w-full md:w-auto flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {!formStatus === 'submitting' && <Send size={20} />}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
