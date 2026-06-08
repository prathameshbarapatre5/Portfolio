"use client";

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, PenTool } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

type Category = 'all' | 'mechanism' | 'space' | 'prototype' | 'concept';

interface Design {
    title: string;
    cat: Exclude<Category, 'all'>;
    catLabel: string;
    year: string;
    status: string;
    tools: string[];
    desc: string;
    image?: string;
}

const categoryLabels: Record<Category, string> = {
    all: 'All',
    mechanism: 'Mechanisms',
    space: 'Space Hardware',
    prototype: 'Prototypes',
    concept: 'Concepts',
};

const designs: Design[] = [];

const Designs = () => {
    const [activeFilter, setActiveFilter] = useState<Category>('all');
    const [selected, setSelected] = useState<Design | null>(null);

    const filtered = activeFilter === 'all'
        ? designs
        : designs.filter(d => d.cat === activeFilter);

    return (
        <main className='min-h-screen py-32'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center mb-20'
                >
                    <h1 className='text-5xl lg:text-7xl font-black mb-4 text-white'>
                        Design <span className='drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]'>Studio</span>
                    </h1>
                    <p className='text-xl text-white/50 max-w-2xl mx-auto'>
                        Mechanical design, CAD, and fabrication work
                    </p>
                </motion.div>

                {/* Filter Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='flex flex-wrap gap-3 justify-center mb-12'
                >
                    {(Object.keys(categoryLabels) as Category[]).map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                                activeFilter === cat
                                    ? 'bg-white text-black border-white'
                                    : 'glass border-white/20 text-white/60 hover:text-white hover:border-white/40'
                            }`}
                        >
                            {categoryLabels[cat]}
                        </button>
                    ))}
                </motion.div>

                {/* Grid or Empty State */}
                {filtered.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='flex flex-col items-center justify-center py-32 text-center'
                    >
                        <div className='w-20 h-20 rounded-2xl glass neon-border flex items-center justify-center mb-6'>
                            <PenTool size={36} className='text-white/40' />
                        </div>
                        <h3 className='text-2xl font-bold text-white mb-3'>Designs coming soon</h3>
                        <p className='text-white/40 max-w-md'>
                            CAD models, renders, and fabrication work will be showcased here.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    >
                        {filtered.map((design, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                onClick={() => setSelected(design)}
                                className='group glass neon-border rounded-2xl overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all'
                            >
                                {/* Thumbnail */}
                                <div className='w-full aspect-[4/3] bg-white/5 flex items-center justify-center overflow-hidden'>
                                    {design.image ? (
                                        <img
                                            src={design.image}
                                            alt={design.title}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                        />
                                    ) : (
                                        <PenTool size={48} className='text-white/20' />
                                    )}
                                </div>

                                {/* Card Body */}
                                <div className='p-6'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <span className='text-xs font-semibold uppercase tracking-wide text-white/50 border border-white/20 px-2.5 py-1 rounded-full'>
                                            {design.catLabel}
                                        </span>
                                        <span className='text-xs text-white/40'>{design.year}</span>
                                    </div>
                                    <h3 className='text-lg font-bold text-white mb-2 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all'>
                                        {design.title}
                                    </h3>
                                    <p className='text-sm text-white/50 line-clamp-2 mb-4'>
                                        {design.desc}
                                    </p>
                                    <div className='flex flex-wrap gap-1.5'>
                                        {design.tools.map((tool, j) => (
                                            <span
                                                key={j}
                                                className='px-2 py-1 bg-white/5 rounded-md text-xs text-white/50 border border-white/10'
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Lightbox */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6'
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.3 }}
                                onClick={e => e.stopPropagation()}
                                className='glass neon-border rounded-2xl overflow-hidden max-w-2xl w-full'
                            >
                                {/* Lightbox Image */}
                                <div className='w-full aspect-video bg-white/5 flex items-center justify-center'>
                                    {selected.image ? (
                                        <img
                                            src={selected.image}
                                            alt={selected.title}
                                            className='w-full h-full object-cover'
                                        />
                                    ) : (
                                        <PenTool size={64} className='text-white/20' />
                                    )}
                                </div>

                                {/* Lightbox Body */}
                                <div className='p-8'>
                                    <div className='flex items-start justify-between mb-2'>
                                        <h2 className='text-2xl font-bold text-white'>{selected.title}</h2>
                                        <button
                                            onClick={() => setSelected(null)}
                                            className='p-2 rounded-lg glass hover:bg-white/10 transition-all ml-4 flex-shrink-0'
                                            aria-label="Close"
                                        >
                                            <X size={20} className='text-white/60' />
                                        </button>
                                    </div>

                                    <span className='text-xs font-semibold uppercase tracking-wide text-white/50 border border-white/20 px-2.5 py-1 rounded-full'>
                                        {selected.catLabel}
                                    </span>

                                    <p className='text-white/60 leading-relaxed mt-5 mb-6'>
                                        {selected.desc}
                                    </p>

                                    <div className='grid grid-cols-3 gap-4 mb-6'>
                                        <div>
                                            <div className='text-xs text-white/40 uppercase tracking-wide mb-1'>Year</div>
                                            <div className='text-sm font-semibold text-white'>{selected.year}</div>
                                        </div>
                                        <div>
                                            <div className='text-xs text-white/40 uppercase tracking-wide mb-1'>Status</div>
                                            <div className='text-sm font-semibold text-white'>{selected.status}</div>
                                        </div>
                                        <div>
                                            <div className='text-xs text-white/40 uppercase tracking-wide mb-1'>Tools</div>
                                            <div className='text-sm font-semibold text-white'>{selected.tools.join(', ')}</div>
                                        </div>
                                    </div>

                                    <div className='flex flex-wrap gap-2'>
                                        {selected.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className='px-3 py-1.5 bg-white/5 rounded-lg text-sm font-medium text-white/60 border border-white/10'
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    );
};

export default Designs;
